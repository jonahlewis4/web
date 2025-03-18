
# Compile stage
FROM golang:alpine AS build-env
ENV CGO_ENABLED 0

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .


RUN go build -gcflags "all=-N -l" -o /server


# Install Delve
RUN apk add --no-cache git
RUN go install github.com/go-delve/delve/cmd/dlv@latest

# Final stage
FROM scratch
EXPOSE 8080 40000
WORKDIR /
COPY --from=build-env /server /
COPY --from=build-env /go/bin/dlv /

CMD ["/dlv", "--listen=:40000", "--headless=true", "--api-version=2", "exec", "/server"]
