FROM node:16

WORKDIR /ecs-codepipeline-bluegreen

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
