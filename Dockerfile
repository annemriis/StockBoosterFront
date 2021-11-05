# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:12-alpine as build

# Set the working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add .bin to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install all the dependencies
COPY ./ /usr/src/app/
RUN npm install
RUN npm install -g npm-install-peers


# Add the source code to app
COPY ./ /usr/src/app/

# Generate the build of the application
CMD npm build-prod
# add gitlab runner t docker gruop 'sudo usermod -a -G docker gitlab-runner'



