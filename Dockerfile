FROM node:10

# install dependencies
WORKDIR /opt/app
COPY package.json package-lock.json* ./

RUN npm config set registry "https://npm.pkg.github.com/repository/npm-grupo/"

RUN npm cache clean --force && npm install

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY ./src /opt/app

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
# ENV PORT 4200
EXPOSE 4200

CMD [ "npm", "run", "start-docker" ]
