FROM php:8.1-apache

COPY . /var/www/html/

RUN a2enmod rewrite

# Redirige a tu archivo personalizado dentro de /html
RUN echo 'RedirectMatch "^/$" "/html/1index_del_home.html"' > /etc/apache2/conf-available/redirect.conf \
    && a2enconf redirect