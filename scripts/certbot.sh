#!/bin/bash

sudo docker run -it --rm --name certbot  \
        -v "./data/certbot/www:/var/www/certbot" \
        -v "./data/certbot/conf:/etc/letsencrypt"
        certbot/certbot certonly \
        certonly --webroot \
        --register-unsafely-without-email --agree-tos \
        --webroot-path=/data/letsencrypt \
        --staging \
        -d stockbooster.ml
