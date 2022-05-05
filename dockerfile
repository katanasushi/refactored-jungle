FROM cypress/browsers:node16.14.2-slim-chrome100-ff99-edge
WORKDIR /usr/app
COPY ./ ./
RUN npm install
RUN npm i cypress
RUN npx cypress install
COPY package.json .
RUN npm i mochawesome
RUN mkdir -p mnt
COPY . mnt/
CMD cd mnt && npm run cy:run