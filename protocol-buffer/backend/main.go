package main

import (
	"fmt"
	protoMsg "github.com/jonahlewis4/web/protocol-buffer/backend/proto"
	"google.golang.org/protobuf/proto"
	"net/http"
)

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
	message := protoMsg.Message{
		Message: "Hello World!",
		Num:     32,
	}
	response, err := proto.Marshal(&message)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/octet-stream")
	_, err = w.Write(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
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
