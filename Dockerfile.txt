FROM php:8.1-apache

# Copia todo el contenido del repositorio a la carpeta raíz del servidor Apache
COPY . /var/www/html/

# Habilita mod_rewrite por si lo necesitas
RUN a2enmod rewrite

# Exponer el puerto 80
EXPOSE 80