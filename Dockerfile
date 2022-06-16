FROM node:13-alpine

WORKDIR /app

COPY ./package.json ./package.json

RUN npm install

COPY . ./

RUN npm run prod:build


EXPOSE 80

CMD ["node", "index.js"]
