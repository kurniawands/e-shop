package main

import (
	"backend/dbSql"
	"backend/mainfunctions"
	"encoding/json"
	"fmt"
)

func main() {
	lin := false
	for !lin {
		lin = mainfunctions.MLogIn("jtroy2d", "QVh51zWRnHlf")
		if !lin {
			fmt.Println("Login failed, username or password is wrong")
		} else {
			fmt.Println("Login successful")
		}
	}
	dbSql.SqlStart()

	var cust dbSql.SqlCust
	var custs []dbSql.SqlCust

	row := dbSql.SqlComm("Select iduser, name, email, address From customers")
	for row.Next() {
		err := row.Scan(&cust.ID, &cust.Name, &cust.Email, &cust.Address)
		if err != nil {
			panic(err)
		}
		custs = append(custs, cust)
		//fmt.Printf("Id: %s Name: %s Email: %s Address: %s\n", cust.ID, cust.Name, cust.Email, cust.Address)
	}

	dbSql.SqlKill()

	for _, n := range custs {
		b, err := json.Marshal(n)
		if err != nil {
			panic(err)
		}
		fmt.Println(string(b))
	}

}
