FROM node:lts-alpine
ENV NODE_ENV=production
<<<<<<< HEAD
RUN yarn global add nodemon
WORKDIR /src
ADD package*.json ./
RUN yarn install
=======
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
>>>>>>> e60bfb7 (fix:vagrant,docker,userapi)
COPY . .

CMD ["node", "index.js"]