package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func main() {
	app := gin.Default()

	viper.AddConfigPath("./config")
	viper.SetConfigType("yaml")
	viper.SetConfigName("dev")
	viper.ReadInConfig()

	baseUrl := viper.GetString("application.baseUrl")
	port := viper.GetString("application.port")

	app.Run(fmt.Sprintf("%s:%s", baseUrl, port))
}
