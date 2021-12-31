FROM node:16-alpine3.12

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN yarn install --immutable --immutable-cache --check-cache \
    && yarn run build

RUN yarn add "nuxt-start@${NUXT_VERSION}"

ENTRYPOINT ["npx", "nuxt-start"]
EXPOSE 3000
