FROM node:8.4.0

# Work directory
RUN mkdir -p /workspace/
WORKDIR /workspace/

# Setup workspace folder
ADD package.json /workspace/
RUN cd /workspace
ADD . /workspace/

RUN npm install
RUN npm run build:prod

EXPOSE 8080

CMD ["node", "build/server"]