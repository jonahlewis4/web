package main

import (
	"fmt"
	"net/http"
)

type Response struct {
	message string
}

func main() {
	server := http.NewServeMux()
	server.Handle("/response", http.HandlerFunc(HandleGetResponse))
	corsServer := corsMiddleWare(server)
	fmt.Println("Starting http server")
	err := http.ListenAndServe(":8080", corsServer)
	if err != nil {
		fmt.Println(err)
	}
}

func HandleGetResponse(w http.ResponseWriter, r *http.Request) {
	response := Response{
		message: "Hello World!",
	}
	_, err := fmt.Fprintf(w, response.message)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
func corsMiddleWare(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding")
		w.Header().Set("Access-Control-Allow-Credentials", "true")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
		}

		next.ServeHTTP(w, r)
	})
}
