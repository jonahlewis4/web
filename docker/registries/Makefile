.PHONY: build
build:
	docker build -t my-scratch-image .

.PHONY: push-dockerhub
	docker tag my-scratch-image jonahnlewis4/my-scratch-image:latest
	docker push jonahnlewis4/my-scratch-image