package dbSql

import (
	"time"

	maf "github.com/kurniawands/e-shop/mainfunctions"
)

func CheckEmail(email string) bool {
	result, err := db.Query("SELECT EXISTS(SELECT 1 FROM users WHERE email =? LIMIT 1)", email)
	if err != nil {
		panic(err)
	}
	var res bool
	for result.Next() {
		err = result.Scan(&res)
		if err != nil {
			panic(err)
		}
	}

	return res
}

func GetCatalog() []SqlProdSimple {
	var prod SqlProdSimple
	var prods []SqlProdSimple
	row, err := db.Query("SELECT idproduct, productname, price, rating, imagepath FROM product")
	if err != nil {
		panic(err)
	}
	for row.Next() {
		err := row.Scan(&prod.ID, &prod.Name, &prod.Price, &prod.Rating, &prod.Imgpath)
		if err != nil {
			panic(err)
		}
		prods = append(prods, prod)
	}
	return prods
}

func GetProd(pid string) SqlProdComplete {
	var prod SqlProdComplete
	row, err := db.Query("SELECT * FROM product where idproduct = ?", pid)
	if err != nil {
		panic(err)
	}
	err = row.Scan(&prod.ID, &prod.Name, &prod.Category, &prod.Price, &prod.Stock, &prod.Rating, &prod.Desc, &prod.Imgpath)
	if err != nil {
		panic(err)
	}
	return prod
}

func GetIdMail(mail string) string {
	var id string
	row, err := db.Query("SELECT iduser FROM users where email = ?", mail)
	if err != nil {
		panic(err)
	}
	for row.Next() {
		err = row.Scan(&id)
		if err != nil {
			panic(err)
		}
	}

	return id
}

func GetPass(id string) string {
	var pass string
	row, err := db.Query("SELECT password FROM users where iduser = ?", id)
	if err != nil {
		panic(err)
	}
	for row.Next() {
		err = row.Scan(&pass)
		if err != nil {
			panic(err)
		}
	}

	return pass
}

func AddCart(prod string, use string, q int) {
	db.Query("INSERT INTO cart VALUES (?, ?, ?)", prod, use, q)
	return
}

func CheckOut(use string) {
	ordid := maf.Genlet(2) + "-" + maf.Gennum(6)
	db.Query("INSERT INTO orders VALUES ? ? ?", use, ordid, time.Now().Format("2006-01-02"))
	row, err := db.Query("SELECT productid, quantity FROM cart where iduser = ?", use)
	if err != nil {
		panic(err)
	}
	var item Cart
	var items []Cart
	for row.Next() {
		err = row.Scan(&item)
		if err != nil {
			panic(err)
		}
		items = append(items, item)
	}
	for i := range items {
		db.Query("INSERT INTO orderdetails VALUES ? ? ?", ordid, items[i].ID, items[i].Quantity)
	}
	return
}
