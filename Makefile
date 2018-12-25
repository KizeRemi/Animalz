.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install project
	@echo "Installing project"
	@[ -f ./.env ] && cp .env.dist .env || true
	@cp .env.dist .env
	@docker-compose up -d
	@echo "Project installed and started"

migrate: ## start migration 
	@docker-compose exec api ./node_modules/knex/bin/cli.js migrate:latest --env local

seed: ## start seed 
	@docker-compose exec api ./node_modules/knex/bin/cli.js seed:run --env local

start: ## Start project
	@echo "Starting project"
	@docker-compose up -d

stop: ## Stop project
	@docker-compose stop
   
delete: ## Delete project installation
	@docker-compose stop
	@docker-compose rm -f
