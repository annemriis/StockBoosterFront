

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY  /dist/ /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# RUN sudo apt-get update \
#      && apt-get install -y python-3-certbot-nginx \
#      && certbot --nginx --non-interactive --agree-tos -m peetertarvas@gmail.com --domains stockbooster.ml \


# VOLUME /etc/letsencrypt

CMD [ "sh", "-c", "nginx -g 'daemon off;'" ]



