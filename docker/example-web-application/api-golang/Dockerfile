FROM golang:1.19-buster AS build

WORKDIR /app

RUN useradd -u 1001 nonroot

COPY go.mod go.sum ./

RUN --mount=type=cache,target=go/pkg/mod \
    --mount=type=cache,target=/root/.cache/go-build \
    \
    go mod download

COPY . .

RUN go build \
    -ldflags="-linkmode external -extldflags -static"\
    -tags netgo \
    -o api-golang


###
FROM scratch

ENV GIN_MODE=release

COPY --from=build /etc/passwd /etc/passwd

COPY --from=build /app/api-golang api-golang

EXPOSE 8080

USER nonroot

CMD ["/api-golang"]