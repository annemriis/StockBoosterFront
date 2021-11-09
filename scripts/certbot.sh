#!/bin/bash

sudo docker run -it --rm --name certbot \
        -v "/cert/www/:/var/www/certbot/" \
        -v "/cert/conf/:/etc/letsencrypt/"
        certbot/certbot certonly \
        certonly --webroot \
        --register-unsafely-without-email --agree-tos \
        --webroot-path=/data/letsencrypt \
        --staging \
        -d stockbooster.ml
