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

## Gitlab runner

 - Install? Kuidas see tehtud on? Mis commandiga?
 - Gitlab runner is registered with command `sudo gitlab-runner register` 
   and Gitlab instance URL is `https://gitlab.cs.ttu.ee/` and registration token `hLGMN99Gh4LqCQb89p2d`
 - Runner description is `iti0302-frontend-runner`
 - Tag `frontend-runner`
 - Executor is shell
 - Following code is added to the frontend `.gitlab-ci.yml` file

```
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
