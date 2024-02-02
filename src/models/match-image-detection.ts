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


import { DetectionFace } from './detection-face';
import { FaceSDKResultCode } from './face-sdkresult-code';

/**
 * 
 * @export
 * @interface MatchImageDetection
 */
export interface MatchImageDetection {
    /**
     * The array of detected faces.
     * @type {Array<DetectionFace>}
     * @memberof MatchImageDetection
     */
    'faces'?: Array<DetectionFace>;
    /**
     * The image index number. Can be given; if not given, the index numbers are set automatically starting from 0. All index numbers must be whole and unique—not repeated.
     * @type {number}
     * @memberof MatchImageDetection
     */
    'imageIndex': number;
    /**
     * 
     * @type {FaceSDKResultCode}
     * @memberof MatchImageDetection
     */
    'status': FaceSDKResultCode;
}

