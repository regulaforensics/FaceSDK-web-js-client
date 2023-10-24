/* tslint:disable */
/* eslint-disable */
/**
 * Regula FaceSDK Web api
 * Regula FaceSDK Web API # Clients * [JavaScript](https://github.com/regulaforensics/FaceSDK-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/FaceSDK-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/FaceSDK-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/FaceSDK-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 5.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { MatchImage } from './match-image';

/**
 * 
 * @export
 * @interface MatchRequest
 */
export interface MatchRequest {
    /**
     * Session identificator.
     * @type {string}
     * @memberof MatchRequest
     */
    'tag'?: string;
    /**
     * Whether to return thumbnails: Base64 cropped images that contain vertically aligned faces.
     * @type {boolean}
     * @memberof MatchRequest
     */
    'thumbnails'?: boolean;
    /**
     * The array of all images included in the comparison.
     * @type {Array<MatchImage>}
     * @memberof MatchRequest
     */
    'images': Array<MatchImage>;
}

