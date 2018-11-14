FROM node:11.1.0 as build-static-files

# Make sure the contracts are already deployed in advanced
# and contract addresses are specified in the config/contracts

# Bring in binary dependencies required by embark
ARG GETH_PACKAGE=geth-linux-amd64-1.8.17-8bbe7207
ADD https://gethstore.blob.core.windows.net/builds/$GETH_PACKAGE.tar.gz /
RUN tar -xvzf $GETH_PACKAGE.tar.gz \
    && mv $GETH_PACKAGE/geth /usr/local/bin/

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i

ARG ENVIRONMENT=testnet
ARG CMS_URL=http://localhost:8001/api/v0

COPY . .
RUN CMS_URL=$CMS_URL npm run build -- $ENVIRONMENT


FROM nginx:1-alpine
COPY --from=build-static-files /app/dist /usr/share/nginx/html

# docker run -p 8000:80 <image>
