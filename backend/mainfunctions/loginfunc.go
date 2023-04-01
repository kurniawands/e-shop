package mainfunctions

import (
	"backend/dbSql"
)

func MLogIn(u string, p string) bool {
	var u1, p1 string
	up := dbSql.SqlComm("'CALL userpass(u = ?, p = ?)', " + u + " " + p)
	err := up.Scan(&u1, &p1)
	if err != nil {
		panic(err)
	}
	if u1 == u && p1 == p {
		return true
	} else {
		return false
	}
}
