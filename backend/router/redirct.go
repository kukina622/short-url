package router

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"shortURL/backend/service"
)

func GetUrlRedirct(c *gin.Context) {
	maptext := c.Param("maptext")
	result, err := service.GetUrlServiceInstance().GetUrlByMapText(maptext)
	if err != nil {
		fmt.Println(err)
	}
	c.Redirect(301, result.Url)
}
