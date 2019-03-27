FROM node:10.13-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 8181

CMD node index.js