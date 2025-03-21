

DEV_COMPOSE_FILE = "docker-compose-dev.yaml"
TEST_COMPOSE_FILE = "docker-compose-test.yaml"

.PHONY: run-tests
run-tests:
	docker compose -f $(DEV_COMPOSE_FILE) -f $(TEST_COMPOSE_FILE) run --build api-golang
	docker compose -f $(DEV_COMPOSE_FILE) -f $(TEST_COMPOSE_FILE) run --build api-node