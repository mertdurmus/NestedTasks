FROM node:11.6.0-alpine AS builder
COPY . ./angularui
WORKDIR /angularui
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /angularui/dist/angularui/ /usr/share/nginx/html
# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]


#remove all containers docker rm $(docker ps -aq)
#remove all images docker rmi $(docker images -q)
#docker build --rm -t angularui:latest .
#docker run --rm -d -p 90:80/tcp angularui:2.0
#docker build -t angularui:2.0 .
#docker run -p 4200:4201 angularui:2.0