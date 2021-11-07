# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:14.18-alpine as build

# Make directory inside docker image and set it as working dir
RUN mkdir -p /app
WORKDIR /app
# copy package.json to /app inside the image
COPY package.json /app
# run install
RUN npm install -g npm-install-peers
RUN npm install

# copy installed stuff to /app
COPY . /app
# build application inside image
RUN npm run build -- --prod

# add gitlab runner t docker gruop 'sudo usermod -a -G docker gitlab-runner'

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80


