FROM node

ADD . /src/
WORKDIR /src/

RUN npm install --production && npm run build

ENTRYPOINT npm run preview -- --port "$PORT"
