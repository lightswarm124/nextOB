#!/bin/bash

cd ./
truffle compile --all
truffle migrate --reset

cd ./client

#Compile and launch app
yarn install
yarn build; yarn start

cd ./
