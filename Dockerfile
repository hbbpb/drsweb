FROM sheerun/node4-npm3-git

MAINTAINER Neo Li <hbbpbb@gmail.com>

ADD . /app
WORKDIR /app

RUN npm install

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

#start server
CMD ["node", "/app/server"]
