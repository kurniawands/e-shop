package dbSql

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

var db sql.DB

func SqlStart() {
	dbt, err := sql.Open("mysql", "root:root@tcp(localhost:3306)/cthings")

	if err != nil {
		panic(err)
	}

	db = *dbt
	dbt.Close()

}

func SqlKill() {
	db.Close()
}

func SqlComm(sql string, s ...interface{}) sql.Rows {
	result, err := db.Query(sql, s...)
	if err != nil {
		panic(err)
	}
	return *result
}
