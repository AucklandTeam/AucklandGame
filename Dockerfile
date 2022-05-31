FROM node:13-alpine

COPY package.json ./

COPY package.json ./

RUN npm install

COPY . ./

RUN npm run build

COPY ./dist ./dist

EXPOSE 80

CMD ["node", "index.js"]
