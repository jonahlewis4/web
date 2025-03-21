# Use the official Go image
FROM golang:1.23.4

# Install Delve
RUN go install github.com/go-delve/delve/cmd/dlv@v1.24.1

# Set working directory inside the container
WORKDIR /go/web/docker/go-docker-debug/

# Copy your Go project into the container
COPY . /go/web/docker/go-docker-debug/

# Expose the Delve debug port
EXPOSE 2345

# Start Delve in headless mode
CMD ["dlv", "debug", "--headless", "--listen=:2345", "--api-version=2", "--accept-multiclient"]
