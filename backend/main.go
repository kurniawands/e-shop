package main

import (
	"backend/dbSql"
	"backend/webHtml"
)

func main() {
	dbSql.SqlStart()
	webHtml.StartS()
}
