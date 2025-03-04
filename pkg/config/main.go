package config

import (
	"encoding/json"
	"io/ioutil"
	"os"
	"strings"

	twitch "github.com/gempir/go-twitch-irc/v2"
	log "github.com/sirupsen/logrus"
)

// Config application configuratin
type Config struct {
	configFile            string
	configFilePermissions os.FileMode
	Username              string   `json:"username"`
	OAuth                 string   `json:"oauth"`
	ListenAddress         string   `json:"listenAddress"`
	Admin                 string   `json:"admin"`
	Channels              []string `json:"channels"`
	ClientID              string   `json:"clientId"`
	ClientSecret          string   `json:"clientSecret"`
	LogLevel              string   `json:"logLevel"`
	Secret                string   `json:"secret"`
	ApiBaseUrl            string   `json:"apiBaseUrl"`
	WebBaseUrl            string   `json:"webBaseUrl"`
	WebhookApiBaseUrl     string   `json:"webhookApiBaseUrl"`
	CookieDomain          string   `json:"cookieDomain"`
	BttvToken             string   `json:"bttvToken"`
}

// ChannelConfig config for indiviual channels
type ChannelConfig struct {
	MessageTypes []twitch.MessageType `json:"messageTypes"`
}

// NewConfig create configuration from file
func NewConfig(filePath string) *Config {
	cfg := loadConfiguration(filePath)

	log.Info("loaded config from " + filePath)

	return cfg
}

// AddChannels adds channels to the config
func (cfg *Config) AddChannels(channelIDs ...string) {
	cfg.Channels = append(cfg.Channels, channelIDs...)
	for _, id := range channelIDs {
		cfg.Channels = appendIfMissing(cfg.Channels, id)
	}

	cfg.persistConfig()
}

func appendIfMissing(slice []string, i string) []string {
	for _, ele := range slice {
		if ele == i {
			return slice
		}
	}
	return append(slice, i)
}

func (cfg *Config) persistConfig() {
	fileContents, err := json.MarshalIndent(*cfg, "", "    ")
	if err != nil {
		log.Error(err)
		return
	}

	err = ioutil.WriteFile(cfg.configFile, fileContents, cfg.configFilePermissions)
	if err != nil {
		log.Error(err)
	}
}

func loadConfiguration(filePath string) *Config {
	// setup defaults
	cfg := Config{
		configFile:    filePath,
		ListenAddress: "127.0.0.1:8025",
		Username:      "justinfan777777",
		OAuth:         "oauth:777777777",
		Channels:      []string{},
		Admin:         "gempir",
		LogLevel:      "info",
	}

	info, err := os.Stat(filePath)
	if err != nil {
		log.Fatal(err)
	}
	cfg.configFilePermissions = info.Mode()

	configFile, err := os.Open(filePath)
	if err != nil {
		log.Fatal(err)
	}
	defer configFile.Close()

	jsonParser := json.NewDecoder(configFile)
	err = jsonParser.Decode(&cfg)
	if err != nil {
		log.Fatal(err)
	}

	// normalize
	cfg.LogLevel = strings.ToLower(cfg.LogLevel)
	cfg.setupLogger()

	// ensure required
	if cfg.ClientID == "" {
		log.Fatal("No clientID specified")
	}

	return &cfg
}

func (cfg *Config) setupLogger() {
	// log.SetReportCaller(true)
	switch cfg.LogLevel {
	case "fatal":
		log.SetLevel(log.FatalLevel)
	case "panic":
		log.SetLevel(log.PanicLevel)
	case "error":
		log.SetLevel(log.ErrorLevel)
	case "warn":
		log.SetLevel(log.WarnLevel)
	case "info":
		log.SetLevel(log.InfoLevel)
	case "debug":
		log.SetLevel(log.DebugLevel)
	}
}
