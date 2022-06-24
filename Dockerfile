FROM node:13-alpine as builder

WORKDIR /app

COPY ./package.json ./package.json

COPY ./prod.env ./prod.env

RUN npm install

COPY . ./
RUN CI=true npm test
RUN npm run prod:build

EXPOSE 3000

CMD ["node", "index.js"]
