package dbSql

type SqlCust struct {
	ID       string `json:"custid"`
	UserName string `json:"custusname"`
	Password string `json:"custpass"`
	Name     string `json:"custname"`
	Email    string `json:"custemail"`
	Address  string `json:"custaddress"`
}

type Cart struct {
	ID string `json="prodid"`
	Quantity int `json="quantity"`
}

type UsLog struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type SqlOrder struct {
	ID   string `json:"ordid"`
	Cid  string `json:"custid"`
	Date string `json:"orddate"`
}

type SqlProdComplete struct {
	ID       string  `json:"prodid"`
	Name     string  `json:"prodname"`
	Category string  `json:"prodcat"`
	Price    int     `json:"prodprice"`
	Stock    int     `json:"prodstock"`
	Rating   float64 `json:"prodrate"`
	Desc     string  `json:"proddes"`
	Imgpath  string  `json:"prodimgpath"`
}

type SqlProdSimple struct {
	ID      string  `json:"prodid"`
	Name    string  `json:"prodname"`
	Price   int     `json:"prodprice"`
	Rating  float64 `json:"prodrate"`
	Imgpath string  `json:"prodimgpath"`
}

type SqlProdTop struct {
	ID      string `json:"prodid"`
	Imgpath string `json:"prodimgpath"`
}
