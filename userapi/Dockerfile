FROM node:lts-alpine
ENV NODE_ENV=production
RUN yarn global add nodemon
WORKDIR /src
ADD package*.json ./
RUN yarn install
EXPOSE 3000
COPY . .

CMD ["node", "src/index.js"]