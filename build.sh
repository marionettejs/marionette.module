#!/usr/bin/env bash

rm dist/build.js

./node_modules/.bin/browserify src/index.js \
  --standalone Module \
  --external backbone \
  --external backbone.marionette \
  --external underscore \
  | ./node_modules/.bin/global-lookup-shim \
  --global-shim underscore:_ \
  --global-shim backbone:Backbone \
  --global-shim backbone.marionette:Marionette \
  > dist/build.js
