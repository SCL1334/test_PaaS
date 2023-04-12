# application container
FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install -g nodemon
RUN npm install
COPY . .
CMD ["nodemon", "app.js"]
