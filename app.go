package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"shortURL/backend/database"
	"shortURL/backend/service"
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

	db := database.Connect(&database.DbConfig{
		Host: database_host, Port: database_port, User: database_user, Password: database_password, Name: database_name,
	})

	database.Migrate()
	
	// init service
	service.InitUrlService(db)

	baseUrl := viper.GetString("application.baseUrl")
	port := viper.GetString("application.port")

	app.Run(fmt.Sprintf("%s:%s", baseUrl, port))
}
