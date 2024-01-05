FROM node:18 as blog_backend

WORKDIR /usr/techblog-api

COPY package*.json ./
RUN npm install

COPY ./ .

EXPOSE 3001

CMD ["npm", "run", "dev"]
