FROM mysql:5.7.42

EXPOSE 3306/tcp

ENV MYSQL_ROOT_PASSWORD=rootpassword 

COPY ./db_init.sql /docker-entrypoint-initdb.d/