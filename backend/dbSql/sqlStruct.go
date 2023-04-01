package dbSql

type SqlCust struct {
	ID       string `json:"custid"`
	UserName string `json:"custusname"`
	Password string `json:"custpass"`
	Name     string `json:"custname"`
	Email    string `json:"custemail"`
	Address  string `json:"custaddress"`
}

type SqlOrder struct {
	ID     string `json:"ordid"`
	Cid    string `json:"custid"`
	Paydet string `json:"paydet"`
	Payser string `json:"payserv"`
}

type SqlProd struct {
	ID    string  `json:"prodid"`
	Name  string  `json:"prodname"`
	Price float64 `json:"prodprice"`
	Stock int     `json:"prodstock"`
}
