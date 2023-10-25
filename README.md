# Regula FaceSDK js client for the browser and node.js based on axios

[![npm version](https://img.shields.io/npm/v/@regulaforensics/facesdk-webclient?color=yellow&style=flat-square)](https://www.npmjs.com/package/@regulaforensics/facesdk-webclient)
![npm type definitions](https://img.shields.io/npm/types/typescript?style=flat-square&collor=858df6)
[![documentation](https://img.shields.io/badge/docs-en-f6858d?style=flat-square)](https://support.regulaforensics.com/hc/en-us/articles/115000916306-Documentation)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-defs-0a8c42?style=flat-square)](https://github.com/regulaforensics/FaceSDK-web-openapi)


Face recognition as easy as reading two bytes.

 - Face Matching - Compare the person holding the ID to the person pictured in the ID document (1:1)
 - Face Recognition - Find the person by his or her photo in databases / lists (1:N)
 - Liveness Detection - Perform liveness check using a selfie taken with the user’s smartphone.

If you have any problems with or questions about this client, please contact us
through a [GitHub issue](https://github.com/regulaforensics/FaceSDK-web-js-client/issues).
You are invited to contribute [new features, fixes, or updates](https://github.com/regulaforensics/FaceSDK-web-js-client/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22), large or small; We are always thrilled to receive pull requests, and do our best to process them as fast as we can. See [dev guide](./dev.md).

## Install package

```
npm install @regulaforensics/facesdk-webclient
```
## Example of Face Matching

Performing request:

```js
const face1 = fs.readFileSync('face1.jpg').buffer;
const face2 = fs.readFileSync('face2.jpg').buffer;

const sdk = new FaceSdk({ basePath: 'http://localhost:41101' });

const response = await sdk.matchingApi.match({
    images: [
        { type: ImageSource.LIVE, data: face1, index: 1 },
        { type: ImageSource.DOCUMENT_RFID, data: face2, index: 2 }
    ]
  });
```

Parsing results:
```js
for (const result of response.results) {
    console.log(`pair(${result.firstIndex},${result.secondIndex})   similarity: ${result.similarity}`)
}
```

You can find more detailed guide and run this sample in [example](https://github.com/regulaforensics/FaceSDK-web-js-client/tree/master/example) folder.

## Compatibility

Language level
* ES5, ES6.Promises - depends on a native ES6 Promise implementation to be supported. If your environment doesn't support ES6 Promises, you can polyfill.

Module system
* CommonJS
* ES6 module system

Definitions
* TypeScript's definitions should be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#including-declarations-in-your-npm-package))
