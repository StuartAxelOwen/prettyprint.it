# prettyprint.it dockerfile

# Pull base image.
FROM dockerfile/nodejs

MAINTAINER Stuart Owen "stuart.owen@gmail.com"

RUN apt-get update

# Copy source
COPY . /src

# Define default command.
CMD ["node", "/src/index.js"]

