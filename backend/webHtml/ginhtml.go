package webHtml

import (
	"backend/dbSql"

	"github.com/gin-gonic/gin"
)

func StartS() {
	r := gin.Default()
	r.GET("/catalog", func(c *gin.Context) {
		var prod dbSql.SqlProdSimple
		var prods []dbSql.SqlProdSimple

		row := dbSql.SqlComm("SELECT * FROM product")

		for row.Next() {
			err := row.Scan(&prod.ID, &prod.Name, &prod.Price, &prod.Rating, &prod.Imgpath)
			if err != nil {
				panic(err)
			}
			prods = append(prods, prod)
		}
		c.JSON(200, prods)
	})
	r.GET("/catalog/:id", func(c *gin.Context) {
		prodid := c.Param("id")
		row := dbSql.SqlComm("SELECT * FROM product WHERE idproduct = ?", prodid)
		var prod dbSql.SqlProdComplete
		for row.Next() {
			err := row.Scan(&prod.ID, &prod.Name, &prod.Category, &prod.Price, &prod.Stock, &prod.Rating, &prod.Desc, &prod.Imgpath)
			if err != nil {
				panic(err)
			}
		}
		c.JSON(200, prod)
	})
	r.Run(":8000")
}
