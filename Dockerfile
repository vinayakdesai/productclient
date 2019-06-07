FROM 172.0.1.228:5000/webserver

COPY ./app1/dist/app14/ /var/www/html

EXPOSE 80

CMD apache2ctl -D FOREGROUND

