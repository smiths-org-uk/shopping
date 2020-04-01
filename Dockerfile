FROM node:alpine
ENV DB_HOST host.docker.internal

# Copy Client files
COPY client/public/ /client/public/

# Copy Server files
COPY server.js /server.js
COPY package.json /package.json

# Install production modules required by Server
RUN npm install --production

CMD node /server.js
