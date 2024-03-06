FROM node:18-alpine
WORKDIR /app

COPY . . 

EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]
