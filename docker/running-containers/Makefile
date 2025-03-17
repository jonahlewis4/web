
DOCKERFILE_DIR:=../Dockerfiles
DOCKERCONTEXT_DIR:=../example-web-application

.PHONY: docker-build-all
	docker build -t client-react-vite -f ${DOCKERFILE_DIR}/client-react/Dockerfile.3 ${DOCKERCONTEXT_DIR}/client-react/

	docker build -t client-react-ngnix -f ${DOCKERFILE_DIR}/client-react/Dockerfile.5 ${DOCKERCONTEXT_DIR}/client-react/

	docker build -t api-node -f ${DOCKERFILE_DIR}/api-node/Dockerfile.7 ${DOCKERCONTEXT_DIR}/api-node/

	docker build -t api-golang -f ${DOCKERFILE_DIR}/api-golang/Dockerfile.6 ${DOCKERCONTEXT_DIR}/api-golang

DATABASE_URL:=