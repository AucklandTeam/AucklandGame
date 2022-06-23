FROM node:13-alpine as builder

WORKDIR /app

COPY ./package.json ./package.json

RUN npm install

COPY . ./
RUN CI=true npm test
RUN npm run prod:build


EXPOSE 80


