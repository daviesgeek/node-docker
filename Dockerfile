FROM nodesource/node:wheezy

COPY . /src
RUN cd /src; npm install

EXPOSE 80
CMD ["node", "/src/index.js"]