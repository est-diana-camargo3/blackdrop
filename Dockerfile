FROM php:8.1-apache

# Copiar todo el contenido del proyecto al contenedor
COPY . /var/www/html/

# Habilitar el módulo rewrite de Apache
RUN a2enmod rewrite

# Establecer como archivo de inicio el archivo correcto
RUN echo "DirectoryIndex 1index_del_home.html" > /etc/apache2/conf-available/custom-index.conf \
    && a2enconf custom-index

# Opcional: establecer permisos adecuados
RUN chown -R www-data:www-data /var/www/html