# react-app/Dockerfile
FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["npm", "start", "daemon off;"]

# Expose the application port
EXPOSE 3000
CMD ["npm", "start"]

