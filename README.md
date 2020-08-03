# Regula Document Reader js client for the browser and node.js based on axios

[![npm version](https://img.shields.io/npm/v/@regulaforensics/document-reader-client?color=yellow&style=flat-square)](https://www.npmjs.org/package/@regulaforensics/document-reader-client)
![npm type definitions](https://img.shields.io/npm/types/typescript?style=flat-square&collor=858df6)

## Install package

```
npm install @regulaforensics/face-api-client
```
## Example

## Compatibility

Language level
* ES5, ES6.Promises - depends on a native ES6 Promise implementation to be supported. If your environment doesn't support ES6 Promises, you can polyfill.

Module system
* CommonJS
* ES6 module system

Definitions
* TypeScript's definitions should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

## Development

Js client is written using typescript, mainly generated from [OpenAPI spec](https://github.com/regulaforensics/FaceRecognition-web-openapi). 
Openapi-generator output used as implementation base(see packages `/src/api`, `/scr/models`). 
All custom logic, on top of generated files, should be places in `/src/ext` folder.

To regenerate models clone [latest OpenAPI definitions](https://github.com/regulaforensics/FaceRecognition-web-openapi)
and set `DEFINITION_FOLDER` as path to cloned directory, for example:
```bash
DEFINITION_FOLDER="/home/user/projects/DocumentReader-api-openapi"
```
Then use next command from the project root:
```bash
docker run --rm -v "${PWD}:/client" -v "${DEFINITION_FOLDER}:/definitions" \
openapitools/openapi-generator-cli generate -g typescript-axios \
-i /definitions/index.yml -o /client/src -c /client/ts-generator-config.json \
-t /client/generator-templates/
```
