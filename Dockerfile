FROM mhart/alpine-node:6.11.0

MAINTAINER Neo Li <hbbpbb@gmail.com>

ADD . /app
WORKDIR /app

RUN apk update && apk upgrade && apk add curl bash git
RUN npm install

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

#start server
CMD ["node", "/app/server"]
