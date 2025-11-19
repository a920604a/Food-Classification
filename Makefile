DOCKER_COMPOSE            = docker compose


.PHONY: help


help:
	@echo "📦 可用指令如下："
	@grep -E '^[a-zA-Z0-9_\-]+:.*?##' Makefile | awk 'BEGIN {FS = ":.*?##"} {printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'


up:  ## 啟動所有服務
	@echo "🚀 啟動開發環境..."
	$(DOCKER_COMPOSE) up -d --build