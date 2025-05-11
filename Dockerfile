FROM php:8.1-apache

# Copia todo tu proyecto
COPY . /var/www/html/

# Activa mod_rewrite de Apache
RUN a2enmod rewrite

# Redirige la raíz (/) al archivo dentro de /html
RUN echo 'RedirectMatch "^/$" "/html/1index_del_home.html"' > /etc/apache2/conf-available/redirect.conf \
    && a2enconf redirect