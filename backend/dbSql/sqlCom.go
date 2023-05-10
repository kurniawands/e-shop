package dbSql

func CheckEmail(email string) bool {
	result, err := db.Query("SELECT EXISTS(SELECT 1 FROM users WHERE email =? LIMIT 1)", email)
	if err != nil {
		panic(err)
	}
	var res bool
	result.Scan(&res)
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
	err = row.Scan(&id)
	if err != nil {
		panic(err)
	}
	return id
}

func GetPass(id string) string {
	var pass string
	row, err := db.Query("SELECT password FROM users where iduser = ?", id)
	if err != nil {
		panic(err)
	}
	err = row.Scan(&pass)
	if err != nil {
		panic(err)
	}
	return pass
}
