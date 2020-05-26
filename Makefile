SHELL=/bin/bash

setup:
	npm install
	npm start

run:
	npm start

docker-setup:
	docker-compose run --rm webapp npm install
	docker-compose up -d webapp

docker-build:
	docker-compose run --rm webapp npm build