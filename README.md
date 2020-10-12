# Regula Face Recognition js client for the browser and node.js based on axios

[![npm version](https://img.shields.io/npm/v/@regulaforensics/document-reader-client?color=yellow&style=flat-square)](https://www.npmjs.org/package/@regulaforensics/document-reader-client)
![npm type definitions](https://img.shields.io/npm/types/typescript?style=flat-square&collor=858df6)
[![documentation](https://img.shields.io/badge/docs-en-f6858d?style=flat-square)](https://support.regulaforensics.com/hc/en-us/articles/115000916306-Documentation)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-defs-0a8c42?style=flat-square)](https://github.com/regulaforensics/FaceRecognition-web-openapi)


Documents recognition as easy as reading two bytes.

If you have any problems with or questions about this client, please contact us
through a [GitHub issue](https://github.com/regulaforensics/FaceRecognition-web-js-client/issues).
You are invited to contribute [new features, fixes, or updates](https://github.com/regulaforensics/FaceRecognition-web-js-client/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22), large or small; We are always thrilled to receive pull requests, and do our best to process them as fast as we can.

## Install package

```
npm install @regulaforensics/face-api-client
```
## Example

Performing request:

```js
let apiBasePath = process.env.API_BASE_PATH || "http://localhost:41101/api"
const face1 = fs.readFileSync('face1.jpg').buffer
const face2 = fs.readFileSync('face2.jpg').buffer

const sdk = new Sdk({basePath: apiBasePath})

const compareResponse = await sdk.matchingApi.compare({
    images: [
        {type: ImageSource.LIVE, data: face1, index: 1},
        {type: ImageSource.DOCUMENT_RFID, data: face1, index: 2},
        {data: face2, index: 3}
    ]
  })
```

You can find a more detailed example in ./example folder.

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
and set `FACER_DEFINITION_FOLDER` as path to cloned directory, for example:
```bash
FACER_DEFINITION_FOLDER="/home/user/projects/FaceRecognition-api-openapi"
```
Then use next command from the project root:
```bash
docker run --rm -v "${PWD}:/client" -v "${FACER_DEFINITION_FOLDER}:/definitions" \
openapitools/openapi-generator-cli generate -g typescript-axios \
-i /definitions/index.yml -o /client/src -c /client/ts-generator-config.json \
-t /client/generator-templates
```
