# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:14.18-alpine as build

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app


RUN npm install
COPY . /app
RUN npm run build --prod

# add gitlab runner t docker gruop 'sudo usermod -a -G docker gitlab-runner'



