# 12.19.0 is the docker image tag (of latest stable version of node) that tell docker use  this node image
FROM node:12.19.0

# Working directory tell docker use this directory / app for docker working dir
WORKDIR /app

# here we are setting enviorment variables
ENV PORT 3001

# here we are copying our package.json file into app that tells node what modules we gonna use for application requirements
COPY package.json /app/package.json

# COPY package.json .

# then we have RUN command (any thing after RUN command docker will execute  (here it run npm install in side of the image))
RUN npm install


# It copy all files of current working dir inside app directory
COPY . /app
# COPY . .

# EXPOSE 3000

# this command docker engine default command that will run when start our container
CMD [ "node", "app.js" ]
