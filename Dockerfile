# prettyprint.it dockerfile

# Pull base image.
FROM dockerfile/nodejs

MAINTAINER Stuart Owen "stuart.owen@gmail.com"

RUN apt-get update

# Copy source
COPY . /src
WORKDIR /src

# Get package dependencies
RUN npm update

EXPOSE 8080

# Define default command.
CMD ["node", "index.js"]
ENTRYPOINT ["node", "index.js"]

