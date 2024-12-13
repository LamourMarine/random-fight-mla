FROM dunglas/frankenphp

ENV SERVER_NAME=:80
ENV COMPOSER_ALLOW_SUPERUSER=1

# Développement
RUN cp $PHP_INI_DIR/php.ini-development $PHP_INI_DIR/php.ini

RUN install-php-extensions \
	pdo_mysql \
	gd \
	intl \
	zip \
	opcache \
	@composer

