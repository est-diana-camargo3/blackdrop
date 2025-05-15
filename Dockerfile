FROM php:8.1-apache


# Instala las dependencias necesarias
RUN apt-get update && \
    apt-get install -y libpq-dev && \
    docker-php-ext-install pgsql

# Copia todo tu proyecto
COPY . /var/www/html/

# Activa mod_rewrite de Apache
RUN a2enmod rewrite

# Redirige la raíz (/) al archivo dentro de /html
RUN echo 'RedirectMatch "^/$" "/html/1indexdelhome.html"' > /etc/apache2/conf-available/redirect.conf \
    && a2enconf redirect
    

