FROM node:lts-alpine
ENV NODE_ENV=production
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0788d01 (fix:docker-compse,dbclient,index.js)
RUN yarn global add nodemon
WORKDIR /src
ADD package*.json ./
RUN yarn install
<<<<<<< HEAD
=======
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
>>>>>>> e60bfb7 (fix:vagrant,docker,userapi)
=======
>>>>>>> 0788d01 (fix:docker-compse,dbclient,index.js)
COPY . .

CMD ["node", "index.js"]