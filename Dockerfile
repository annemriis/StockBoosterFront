# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:12-alpine as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install -g npm-install-peers

# Generate the build of the application
RUN npm run build

# add gitlab runner t docker gruop 'sudo usermod -a -G docker gitlab-runner'



