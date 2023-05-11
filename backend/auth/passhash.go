package auth

import (
	db "backend/dbSql"
)

func checkAuth(id string, pass string) bool {
	auth := false
	checkpass := db.GetPass(id)

	if pass == checkpass {
		auth = true
	}
	return auth
}
