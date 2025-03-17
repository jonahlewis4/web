.PHONY: build
build:
	docker build -t my-scratch-image .

.PHONY: push-dockerhub
	docker tag my-scratch-image jonahnlewis4/my-scratch-image:tag2
	docker push jonahnlewis4/my-scratch-image:tag2