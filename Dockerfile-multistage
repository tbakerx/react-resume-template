FROM node:16.13.1 AS build
WORKDIR /usr/app
COPY package.json /usr/app
RUN npm install
COPY . /usr/app
RUN npm run build

FROM nginx
COPY --from=build /usr/app/build /usr/share/nginx/html
