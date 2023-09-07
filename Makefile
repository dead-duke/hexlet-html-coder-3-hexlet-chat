install:
	npm install

lint:
	npx stylelint ./app/scss/**/*.scss
	npx glob-exec --foreach "./app/pug/**/*.pug" "npx pug-lint {{file}}"

build-project:
	gulp

deploy:
	npx surge ./src/
