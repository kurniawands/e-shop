package testing

import (
	"net/http"
	"time"

	"github.com/kurniawands/e-shop/dbSql"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
)

var jwtKey = []byte("my_secret_key")

type Credentials struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type Claims struct {
	Email string `json:"email"`
	jwt.StandardClaims
}

func main() {
	router := gin.Default()

	router.POST("/login", func(c *gin.Context) {
		var creds Credentials
		if err := c.ShouldBindJSON(&creds); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
			return
		}

		// Check credentials against a database
		if !isValidCredentials(creds.Email, creds.Password) {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})
			return
		}

		// Create JWT token
		expirationTime := time.Now().Add(5 * time.Minute)
		claims := &Claims{
			Email: creds.Email,
			StandardClaims: jwt.StandardClaims{
				ExpiresAt: expirationTime.Unix(),
			},
		}
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
		tokenString, err := token.SignedString(jwtKey)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not generate token"})
			return
		}

		// Return JWT token to client
		c.JSON(http.StatusOK, gin.H{"token": tokenString})
	})

	router.Run(":8080")
}

func isValidCredentials(email string, password string) bool {
	row := dbSql.SqlComm("Select email, idcustomer From customers")
	var em1, ps1 string
	err := row.Scan(&em1, &ps1)
	if err != nil {
		panic(err)
	}
	if em1 == email && ps1 == password {
		return true
	} else {
		return false
	}
}
