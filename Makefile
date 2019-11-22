.PHONY: dependency-install file-permission

dependency: dependency-install file-permission
install: app-install dump-autoload npm-install

help:
	@echo 'make install -- download dependencies and install'

dependency-install:
	composer install

npm-install:
	npm install
	npm run prod

app-install:
	php artisan app:install


file-permission:
	chmod -R 777 storage/
	chmod -R 777 bootstrap/cache/
	chmod -R 777 public/export


dump-autoload:
	php artisan clear-compiled

