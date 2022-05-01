package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {
	app := gin.Default()

	viper.AddConfigPath("./config")
	viper.SetConfigType("yaml")
	viper.SetConfigName("dev")
	viper.ReadInConfig()

	database_host := viper.GetString("application.database_host")
	database_port := viper.GetString("application.database_port")
	database_user := viper.GetString("application.database_user")
	database_password := viper.GetString("application.database_password")
	database_name := viper.GetString("application.database_name")

	dsn := fmt.Sprintf("%s:%s@%s(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", database_user, database_password, "tcp", database_host, database_port, database_name)
	_, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	baseUrl := viper.GetString("application.baseUrl")
	port := viper.GetString("application.port")

	app.Run(fmt.Sprintf("%s:%s", baseUrl, port))
}
