package main

import (
	"fmt"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"strconv"
	"sync"
	"sync/atomic"
	"time"
)

var counter atomic.Int64
var clients = make(map[*websocket.Conn]bool)
var mutex = &sync.Mutex{}
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		client := r.Header.Get("Origin")
		fmt.Println("Client:", client)
		if client == "http://localhost:5174" {
			return true
		}
		return false
	},
}
var AllowedOrigins = []string{}

func main() {
	ticker := time.NewTicker(time.Second)
	counter.Store(0)

	go func() {
		for range ticker.C {
			counter.Add(1)
			newCount := counter.Load()
			for client := range clients {
				client.WriteMessage(websocket.TextMessage, []byte(strconv.FormatInt(newCount, 10)))
			}
		}
	}()

	router := http.NewServeMux()
	router.Handle("/counterConnect", http.HandlerFunc(HandleConnect))
	corsRouter := corsMiddleware(router)

	fmt.Println("starting server")
	err := http.ListenAndServe(":8080", corsRouter)
	if err != nil {
		fmt.Println(err)
	}
}

func HandleConnect(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	defer conn.Close()

	if err != nil {
		log.Println(err)
	}

	fmt.Println("New client " + conn.RemoteAddr().String())
	mutex.Lock()
	clients[conn] = true
	mutex.Unlock()

	for {
		_, msg, err := conn.ReadMessage()
		log.Println(string(msg))
		if err != nil {
			log.Println(err)
			mutex.Lock()
			delete(clients, conn)
			mutex.Unlock()
			break
		}
	}

}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Set("Access-Control-Allow-Credentials", "true")

		// Handle preflight requests
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}
