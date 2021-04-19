FROM node:12.7-alpine

WORKDIR /phollery/app/frontend

COPY /frontend/package.json ./

RUN npm install

COPY /frontend/. .

RUN npm i @angular/cli -g

RUN npm run build

WORKDIR /phollery/app/server

COPY /phollery-api/package.json ./

RUN npm install

COPY phollery-api/. .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]