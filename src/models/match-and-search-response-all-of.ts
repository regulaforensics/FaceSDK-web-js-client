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


import { MatchAndSearchResponseAllOfDetections } from './match-and-search-response-all-of-detections';
import { MatchImageResult } from './match-image-result';

/**
 * 
 * @export
 * @interface MatchAndSearchResponseAllOf
 */
export interface MatchAndSearchResponseAllOf {
    /**
     * 
     * @type {Array<MatchImageResult>}
     * @memberof MatchAndSearchResponseAllOf
     */
    'results'?: Array<MatchImageResult>;
    /**
     * 
     * @type {number}
     * @memberof MatchAndSearchResponseAllOf
     */
    'elapsedTime'?: number;
    /**
     * A free-form object containing person\'s extended attributes.
     * @type {{ [key: string]: object; }}
     * @memberof MatchAndSearchResponseAllOf
     */
    'metadata'?: { [key: string]: object; };
    /**
     * 
     * @type {Array<MatchAndSearchResponseAllOfDetections>}
     * @memberof MatchAndSearchResponseAllOf
     */
    'detections'?: Array<MatchAndSearchResponseAllOfDetections>;
}

