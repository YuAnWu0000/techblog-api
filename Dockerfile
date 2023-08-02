FROM node:18 as blog_backend

WORKDIR /usr/techblog-api

COPY techblog-api/package*.json ./
RUN npm install

COPY techblog-api/ .

EXPOSE 3001

CMD ["npm", "run", "dev"]
