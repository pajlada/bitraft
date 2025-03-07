package server

import (
	"github.com/gempir/bitraft/services/api/emotechief"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"github.com/gempir/bitraft/pkg/config"
	"github.com/gempir/bitraft/pkg/helix"
	"github.com/gempir/bitraft/pkg/store"
)

// Server api server
type Server struct {
	cfg             *config.Config
	helixClient     *helix.Client
	helixUserClient *helix.Client
	store           *store.Store
	emotechief      *emotechief.EmoteChief
}

// NewServer create api Server
func NewServer(cfg *config.Config, helixClient *helix.Client, helixUserClient *helix.Client, store *store.Store, emotechief *emotechief.EmoteChief) Server {
	return Server{
		cfg:             cfg,
		helixClient:     helixClient,
		helixUserClient: helixUserClient,
		store:           store,
		emotechief:      emotechief,
	}
}

func (s *Server) Start() {
	go s.syncSubscriptions()
	go s.tokenRefreshRoutine()

	e := echo.New()
	e.HideBanner = true
	e.GET("/api/callback", s.handleCallback)
	e.POST("/api/redemption", s.handleChannelPointsRedemption)
	e.GET("/api/userConfig", s.handleUserConfig)
	e.POST("/api/userConfig", s.handleUserConfig)
	e.DELETE("/api/reward/:userID/:rewardID", s.handleRewardDeletion)

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{s.cfg.WebBaseUrl},
	}))
	e.Logger.Fatal(e.Start(":8035"))
}
