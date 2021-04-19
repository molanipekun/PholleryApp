FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

ADD . .

RUN npm install

# Port you want to expose your app to
EXPOSE 3000

# Depends on how you want to run your app
CMD [ "npm", "start" ]