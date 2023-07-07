/* tslint:disable */
/* eslint-disable */
/**
 * Regula FaceSDK Web API
 * Regula FaceSDK Web API # Clients * [JavaScript](https://github.com/regulaforensics/FaceSDK-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/FaceSDK-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/FaceSDK-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/FaceSDK-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 5.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { FaceSDKResultCode } from './face-sdkresult-code';
import { FacesResponse } from './faces-response';

/**
 * 
 * @export
 * @interface MatchAndSearchResponseAllOfDetections
 */
export interface MatchAndSearchResponseAllOfDetections {
    /**
     * 
     * @type {Array<FacesResponse>}
     * @memberof MatchAndSearchResponseAllOfDetections
     */
    'faces'?: Array<FacesResponse>;
    /**
     * The image index number. Can be given; if not given, the index numbers are set automatically starting from 0. All index numbers must be whole and unique—not repeated.
     * @type {number}
     * @memberof MatchAndSearchResponseAllOfDetections
     */
    'imageIndex'?: number;
    /**
     * 
     * @type {FaceSDKResultCode}
     * @memberof MatchAndSearchResponseAllOfDetections
     */
    'status'?: FaceSDKResultCode;
}

