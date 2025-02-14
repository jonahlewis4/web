echo "building backend protocol buffer code"
protoc backend/proto/response.proto --go_out=.
echo "building frontend protocol buffer code"
(cd frontend/vite-project && npx buf generate)
echo running backend/main.go
go run backend/main.go