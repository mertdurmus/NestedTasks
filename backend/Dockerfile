FROM node:8
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
#RUN npm cache clean
RUN npm cache clean -f
RUN npm install
COPY . /usr/src/app
EXPOSE 7200
CMD ["npm","start"]