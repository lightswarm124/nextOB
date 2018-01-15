#!/bin/bash

#General
sudo apt update
sudo apt install -y build-essential curl git make cmake libssl-dev


#NodeJS
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt install -y nodejs yarn

#only need to be installed once
yarn global add ganache-cli truffle
