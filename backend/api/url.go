package api

import (
	"github.com/gin-gonic/gin"
	"shortURL/backend/service"
)

type UrlRequestBody struct {
	Url string `json:"url"`
}

func PostUrl(c *gin.Context) {
	body := UrlRequestBody{}
	err := c.BindJSON(&body)
	if err != nil {
		c.JSON(400, gin.H{"message": "Missing parameters"})
		return
	}
	var mapText string
	for {
		mapText = service.GetUrlServiceInstance().GeraMapText(8)
		if !(service.GetUrlServiceInstance().MapTextHasConflict(mapText)) {
			break
		}
	}
	service.GetUrlServiceInstance().AddUrlMappingRecord(body.Url, mapText)
	c.JSON(200, gin.H{"mapText": mapText})
}
