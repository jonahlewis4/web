FROM node:current-alpine3.21

#copy code to this path in the image
WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY ./src .

CMD ["node", "index.js"]