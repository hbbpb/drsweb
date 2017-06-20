FROM mhart/alpine-node:6.11.0

MAINTAINER Neo Li <hbbpbb@gmail.com>

RUN apk add --update git && \
  rm -rf /tmp/* /var/cache/apk/*

ADD . /app
WORKDIR /app

RUN npm install

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

#start server
CMD ["node", "/app/server"]
