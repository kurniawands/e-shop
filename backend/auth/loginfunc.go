package auth

import (
	db "backend/dbSql"
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

func ULogIn(c *gin.Context) {
	var user db.UsLog
	var uid string
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	if !db.CheckEmail(user.Email) {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid Email"})
		return
	} else {
		uid = db.GetIdMail(user.Email)
	}

	if !checkAuth(uid, user.Password) {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid Password"})
		return
	}

	// Set session value
	session := sessions.Default(c)
	session.Set("id", uid)
	session.Set("authenticated", true)
	session.Save()

	// Redirect to home page
	c.Redirect(http.StatusSeeOther, "/")
}
