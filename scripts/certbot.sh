#!/bin/bash

sudo docker run -it --rm --name certbot \
        -v "/certbot/www/:/var/www/certbot/" \
        -v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
        -v "/certbot/conf/:/etc/letsencrypt/"
        certbot/certbot certonly
