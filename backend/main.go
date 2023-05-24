package main

import (
	"github.com/kurniawands/e-shop/dbSql"
	"github.com/kurniawands/e-shop/webHtml"
)

func main() {
	dbSql.SqlStart()
	webHtml.StartS()
}
