#!/bin/bash

cd ./quartz
npm i
npx quartz build --directory=../vault --serve
cd ..
