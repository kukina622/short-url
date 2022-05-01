package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func main() {
	app := gin.Default()
	
	viper.SetConfigType("yaml")
	viper.AddConfigPath("./config")
	viper.SetConfigName("config")

	baseUrl := viper.Get("application.baseUrl")
	port := viper.Get("application.port")

	app.Run(fmt.Sprintf("%s:%s", baseUrl, port))
}
