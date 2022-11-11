FROM node:latest AS base

# Setting up Application Directory
ENV INSTALL_PATH /app
RUN mkdir $INSTALL_PATH

WORKDIR /app

## Loading in only the dependancies to base cache layer
## NextJS Dependancies
COPY package.json /app/package.json

RUN yarn install

COPY . /app

ENV PORT=3000


RUN apt-get install curl
RUN apt-get update && \
    apt-get -y install sudo && \
    apt-get -y install git && \
    apt-get -y install vim && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ rc main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get -y install yarn

## in case you reorder the imports of data.tsx modules
RUN yarn lint --fix
RUN yarn build
CMD [ "yarn", "start" ]

#Sets default working directory for the application
FROM node:latest

## Copy NextJS code 

COPY . ./app

## Copy ./app directory contents from base build stage
COPY --from=base ./app ./app

WORKDIR /app

# Run a shell
CMD ["yarn", "start"]

