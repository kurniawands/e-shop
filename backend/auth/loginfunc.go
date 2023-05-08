package mainfunctions

import (
	db "backend/dbSql"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ULogIn(c *gin.Context) {
	var user db.UsLog
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	if !db.checkEmail(user.Email) {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid Email"})
	}

}
