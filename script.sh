#!/bin/bash

truffle compile --all; truffle migrate --reset; cd client; yarn dev
