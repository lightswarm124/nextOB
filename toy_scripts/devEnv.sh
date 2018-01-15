#!/bin/bash

cd ./
truffle compile --all
truffle migrate --reset

cd ./client

#install node dependencies
yarn install

#start dev environment
yarn dev

cd ./
