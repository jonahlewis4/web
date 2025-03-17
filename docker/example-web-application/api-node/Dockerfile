FROM node:current-alpine3.21

#copy code to this path in the image
WORKDIR /usr/src/app

#set to production mode
ENV NODE_ENV=production

COPY package*.json ./

RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci --only=production

#node is a user from the node image.
USER node

COPY --chown=node:node ./src .

#this is just documentation, so people know to publish on port 3000.
EXPOSE 3000

CMD ["node", "index.js"]