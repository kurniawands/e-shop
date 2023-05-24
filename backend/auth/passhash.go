package auth

import (
	db "github.com/kurniawands/e-shop/dbSql"
)

func checkAuth(id string, pass string) bool {
	auth := false
	checkpass := db.GetPass(id)

	if pass == checkpass {
		auth = true
	}
	return auth
}
