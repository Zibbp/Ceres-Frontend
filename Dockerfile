FROM node:16-alpine3.12 as builder

ENV NODE_ENV build

WORKDIR /usr/src/app

ADD yarn.lock package.json /usr/src/app/
RUN yarn install

ADD . /usr/src/app/

RUN yarn install --immutable --immutable-cache --check-cache \
    && yarn run build

FROM node:16-alpine3.12

ENV NODE_ENV production
ENV NUXT_VERSION=2.15.8

WORKDIR /usr/src/app

RUN yarn add "nuxt-start@${NUXT_VERSION}"

COPY --from=builder /usr/src/app/.nuxt /usr/src/app/.nuxt
COPY --from=builder /usr/src/app/nuxt.config.ts /usr/src/app/
COPY --from=builder /usr/src/app/static /usr/src/app/

ENTRYPOINT ["npx", "nuxt-start"]
EXPOSE 3000
