FROM node:latest

# Setting up Application Directory
ENV INSTALL_PATH /opt/app

COPY ./ /opt/app/react-resume-template
RUN mkdir -p $INSTALL_PATH


RUN apt-get install curl
RUN apt-get update && \
    apt-get -y install sudo && \
    apt-get -y install git && \
    apt-get -y install vim && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ rc main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get -y install yarn

#Sets default working directory for the application
WORKDIR /opt/app/react-resume-template

# Run a shell
CMD ["/bin/sh"]

