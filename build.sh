#!/usr/bin/env bash

./node_modules/.bin/browserify src/index.js \
  --standalone Module \
  --external backbone \
  --external backbone.marionette \
  --external underscore \
  -o dist/build.js
