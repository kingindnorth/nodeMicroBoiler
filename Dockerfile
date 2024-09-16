FROM node:current-alpine3.18

RUN mkdir -p /app

WORKDIR .

COPY MICROSERVICE_NAME /app

WORKDIR /app

RUN npm install

EXPOSE 3000

ENV NODE_ENV 'dev'

WORKDIR /app

RUN date

CMD ["npm", "start"]
