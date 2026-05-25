install: #установка зависимостей
	npm ci
brain-games: #запуск приложения
	node bin/brain-games.js
publish: #отладка публикации пакета
	npm publish --dry-run
lint: #проверка на кода на соответствие стандарту
	npx eslint .
