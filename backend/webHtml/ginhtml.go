package webHtml

import (
	au "github.com/kurniawands/e-shop/auth"
	db "github.com/kurniawands/e-shop/dbSql"

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

func StartS() {
	r := gin.Default()
	store := cookie.NewStore([]byte("secret"))
	r.Use(sessions.Sessions("mysession", store))
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	r.Use(cors.New(config))
	r.GET("/catalog", func(c *gin.Context) {
		prods := db.GetCatalog()
		c.JSON(200, prods)
	})
	r.GET("/catalog/:id", func(c *gin.Context) {
		prodid := c.Param("id")
		prod := db.GetProd(prodid)
		c.JSON(200, prod)
	})
	r.POST("/login", au.ULogIn)
	r.Run(":8000")
	r.POST("/checkout", func(c *gin.Context) {
		var user string
		if err := c.ShouldBindJSON(&user); err != nil {
			c.JSON(404, gin.H{"error": "Invalid request"})
			return
		}
		db.CheckOut(user)
	})
}
