FROM node:16.14.0
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
COPY . ./
RUN yarn install
RUN yarn build
CMD ["yarn", "start"]