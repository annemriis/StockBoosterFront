# Web application from team_02 - front end

## Team members
  - Peeter Tarvas

  - Annemari Riisimäe

  - Kaisa-Mari Veinberg

  - Markus Talvik

## How to run locally

  - Make sure you have Node.js (latest) and npm
  - cd to project root
  - Run `npm i` to install npm modules
  - Run `ng serve` to start front-end
  - Navigate to `http://localhost:4200/`

## How to server (mis see täpselt on?)
  - npm run build

## Virtual memory

 - Added virtual memory for the server
 - For 2Gb virtual memory run commands:

```bash
sudo fallocate -l 2G /swapfile  
sudo chmod 600 /swapfile  
sudo mkswap /swapfile  
sudo swapon /swapfile  
sudo swapon -show  
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

## Gitlab runner

 - Install? Kuidas see tehtud on? Mis commandiga?
 - Gitlab runner is registered with command `sudo gitlab-runner register` 
   and Gitlab instance URL is `https://gitlab.cs.ttu.ee/` and registration token `hLGMN99Gh4LqCQb89p2d`
 - Runner description is `iti0302-frontend-runner`
 - Tag `frontend-runner`
 - Executor is shell
 - Following code is added to the frontend `.gitlab-ci.yml` file

```bash
stages:
  - build
  - deploy

build frontend:
  stage: build
  image: node:12-alpine
  cache:
    paths:
      - node_modules
  artifacts:
    paths:
      - dist
  tags:
    - frontend-runner
  script:
    - npm install
    - npm run build

deploy frontend:
  stage: deploy
  only:
    refs:
      - 40-frontend-gitlab-runner
      - main # only branch to be deployed
  tags:
    - frontend-runner
  script:
    - mkdir -p ~/front-deployment
    - rm -rf ~/front-deployment/*
    - cp -r dist/. ~/front-deployment
```
