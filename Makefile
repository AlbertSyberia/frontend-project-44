install: #установка зависимостей
	npm ci
brain-games: #запуск приложения
	node bin/brain-games.js
publish: #отладка публикации пакета
	npm publish --dry-run
lint: #проверка кода на соответствие стандарту
	npx eslint .
brain-calc:
	node bin/brain-calc.js
brain-even:
	node bin/brain-even.js
brain-gcd:
	node bin/brain-gcd.js
brain-prime:
	node bin/brain-prime.js
brain-progression:
	node bin/brain-progression.js
