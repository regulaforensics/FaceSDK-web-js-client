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


import { MatchImageDetection } from './match-image-detection';
import { MatchImageResult } from './match-image-result';

/**
 * 
 * @export
 * @interface MatchResponseAllOf
 */
export interface MatchResponseAllOf {
    /**
     * The array of detected faces.
     * @type {Array<MatchImageDetection>}
     * @memberof MatchResponseAllOf
     */
    'detections'?: Array<MatchImageDetection>;
    /**
     * The array of matching results.
     * @type {Array<MatchImageResult>}
     * @memberof MatchResponseAllOf
     */
    'results'?: Array<MatchImageResult>;
    /**
     * A free-form object containing person\'s extended attributes.
     * @type {{ [key: string]: object; }}
     * @memberof MatchResponseAllOf
     */
    'metadata'?: { [key: string]: object; };
}

