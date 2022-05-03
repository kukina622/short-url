package service

import (
	"errors"
	"gorm.io/gorm"
	"math/rand"
	"shortURL/backend/model"
	"time"
)

type urlService struct {
	repository *gorm.DB
}

var urlServiceInstance urlService

func InitUrlService(db *gorm.DB) {
	urlServiceInstance = urlService{repository: db}
}

func GetUrlServiceInstance() *urlService {
	return &urlServiceInstance
}

func (urlServiceInstance *urlService) MapTextHasConflict(mapText string) bool {
	err := urlServiceInstance.repository.Where("map_text = ?", mapText).First(&model.UrlMapping{}).Error
	return errors.Is(err, gorm.ErrRecordNotFound)
}

func (urlServiceInstance *urlService) GeraMapText(length int) string {
	character := "ABCDEFGHIJKLMOPQRSTUVXWYZ0123456789"
	mapText := ""
	rand.Seed(time.Now().UnixNano())
	for i := 0; i < length; i++ {
		index := rand.Intn(len(character))
		mapText += character[index : index+1]
	}
	return mapText
}

func (urlServiceInstance *urlService) InsertRecord(url string, mapText string) {
	urlServiceInstance.repository.Create(&model.UrlMapping{Url: url, MapText: mapText})
}
