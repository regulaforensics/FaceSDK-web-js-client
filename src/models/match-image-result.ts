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


// May contain unused imports in some cases
// @ts-ignore
import { ImageSource } from './image-source';

/**
 * 
 * @export
 * @interface MatchImageResult
 */
export interface MatchImageResult {
    /**
     * The image index number. Can be given; if not given, the index numbers are set automatically starting from 0. All index numbers must be whole and unique—not repeated.
     * @type {number}
     * @memberof MatchImageResult
     */
    'firstIndex': number;
    /**
     * The detected face index number.
     * @type {number}
     * @memberof MatchImageResult
     */
    'firstFaceIndex'?: number;
    /**
     * 
     * @type {ImageSource}
     * @memberof MatchImageResult
     */
    'first'?: ImageSource;
    /**
     * The image index number. Can be given; if not given, the index numbers are set automatically starting from 0. All index numbers must be whole and unique—not repeated.
     * @type {number}
     * @memberof MatchImageResult
     */
    'secondIndex': number;
    /**
     * The detected face index number.
     * @type {number}
     * @memberof MatchImageResult
     */
    'secondFaceIndex'?: number;
    /**
     * 
     * @type {ImageSource}
     * @memberof MatchImageResult
     */
    'second'?: ImageSource;
    /**
     * A dimensionless number that shows how similar the compared faces are. 0—absolutely identical faces.
     * @type {number}
     * @memberof MatchImageResult
     */
    'score'?: number;
    /**
     * The detected faces similarity, %. 100%—absolutely identical faces, 0%—absolutely not identical.
     * @type {number}
     * @memberof MatchImageResult
     */
    'similarity'?: number;
}



