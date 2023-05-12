package api

import (
	au "api/auth"
	db "api/dbSql"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

var (
	app *gin.Engine
)

func myRoute(r *gin.RouterGroup) {
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
}

func init() {
	app = gin.New()
	r := app.Group("/api")
	myRoute(r)
}

func Handler(w http.ResponseWriter, r *http.Request) {
	app.ServeHTTP(w, r)
}
