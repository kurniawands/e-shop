package webHtml

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func startS() {
    r:=gin.Default()
    r.GET("/prod/name", getData)
    http.ListenAndServe(":8000", r)
    r.
}


func getData(c *gin.Context) {
    
}