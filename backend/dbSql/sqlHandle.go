package dbSql

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

var db sql.DB

func SqlStart() {
	dbt, err := sql.Open("mysql", "root:root@tcp(localhost:3306)/singlesystem")

	if err != nil {
		panic(err)
	}

	db = *dbt
	dbt.Close()

}

func SqlKill() {
	db.Close()
}

func SqlComm(s string) sql.Rows {
	result, err := db.Query(s)
	if err != nil {
		panic(err)
	}
	return *result
}
