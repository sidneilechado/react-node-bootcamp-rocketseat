Iniciando back-end do app

Annotatitons

Docker concepts:
  - Images (Can be used as a base for several containers, like object vs instance)
  - Container (Is an instance of a image)
  - Docker Registry (Docker hub) -> Source for all images
  - Dockerfile (Recipe of an image)
      # From a pre-existant image
      FROM node:10

      # Define which folder we will be working on
      WORKDIR /usr/app
      COPY . ./

      # Install dependecies
      RUN yarn

      # Which port we going to expose?
      EXPOSE 3333

      # Run our app
      CMD yarn start/dev

TypeORM
  - https://typeorm.io/#/