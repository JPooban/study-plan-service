FROM node:8.12.0-alpine
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --only=production
COPY . .
EXPOSE 8081
CMD ["yarn", "start"]