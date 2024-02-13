/* tslint:disable */
/* eslint-disable */
/**
 * Regula FaceSDK Web API
 * [Download OpenAPI specification](https://github.com/regulaforensics/FaceSDK-web-openapi) ### Clients * [JavaScript](https://github.com/regulaforensics/FaceSDK-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/FaceSDK-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/FaceSDK-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/FaceSDK-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ImageSource } from './image-source';
import { ImageData } from './image-data';

/**
 * 
 * @export
 * @interface MatchAndSearchRequestAllOfImages
 */
export interface MatchAndSearchRequestAllOfImages {
    /**
     * 
     * @type {ImageData}
     * @memberof MatchAndSearchRequestAllOfImages
     */
    'content'?: ImageData;
    /**
     * 
     * @type {ImageSource}
     * @memberof MatchAndSearchRequestAllOfImages
     */
    'type'?: ImageSource;
}

