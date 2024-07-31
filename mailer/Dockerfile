FROM node:16-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache curl

COPY package*.json ./

RUN npm install

COPY . .

COPY .env.docker /usr/src/app/.env

RUN npm run build

CMD ["node", "dist/main"]
