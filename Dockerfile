FROM node

ADD . /src/
WORKDIR /src/

RUN npm install --production --prefix /src/ && npm run build --prefix /src/

ENTRYPOINT npm run preview --prefix /src/ -- --project-root /src/ --verbose --port "$PORT"
