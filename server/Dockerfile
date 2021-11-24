FROM node:14.16.1-alpine3.13

ARG NODE_ENV="development"

RUN mkdir /server

RUN mkdir -p /var/www/html/images

WORKDIR /server

COPY . .

RUN npm install

EXPOSE 3000

CMD npm start