FROM mhart/alpine-node:4.3

MAINTAINER Neo Li <hbbpbb@gmail.com>

COPY . /app/

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

#start server
CMD ["node", "/app/server"]
