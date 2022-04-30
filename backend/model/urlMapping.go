package model

type UrlMapping struct {
	ID      int64  `gorm:"type:bigint(20) NOT NULL auto_increment;primary_key;"`
	Url     string `gorm:"type:longText NOT NULL;"`
	MapText string `gorm:"type:varchar(50) NOT NULL;"`
}
