#!/bin/sh

docker run --user "$(id -u):$(id -g)" --rm -v "${PWD}:/client" -v "${PWD}/../FaceSDK-web-openapi:/definitions" \
openapitools/openapi-generator-cli:v7.2.0 generate -g typescript-axios \
-i /definitions/index.yml -o /client/src -c /client/ts-generator-config.json || exit 1

npm run format || exit 0
