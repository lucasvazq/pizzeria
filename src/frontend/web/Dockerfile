# FROM python:3.10.5-bullseye
FROM node:18.5.0-bullseye

WORKDIR /workspace/src/frontend/web

COPY ./src/frontend/web .

RUN chown -R node /workspace/src/frontend/web
USER node

# Install requirements. 
RUN rm -rf ./node_modules \
    && yarn install \
    && yarn run build

EXPOSE 8000

CMD ["sh", "-c", "yarn run start"]
