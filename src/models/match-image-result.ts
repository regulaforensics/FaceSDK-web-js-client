/* tslint:disable */
/* eslint-disable */
/**
 * Regula FaceSDK Web API
 * Regula FaceSDK Web API
 *
 * The version of the OpenAPI document: 3.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { FaceSDKResultCode } from './face-sdkresult-code';

/**
 * 
 * @export
 * @interface MatchImageResult
 */
export interface MatchImageResult {
    /**
     * Image index used to identify input photos between themselves. If not specified, than input list index is used
     * @type {number}
     * @memberof MatchImageResult
     */
    firstIndex: number;
    /**
     * Faces index used to identify faces in scope of one photo.
     * @type {number}
     * @memberof MatchImageResult
     */
    firstFaceIndex?: number;
    /**
     * Image index used to identify input photos between themselves. If not specified, than input list index is used
     * @type {number}
     * @memberof MatchImageResult
     */
    secondIndex: number;
    /**
     * Faces index used to identify faces in scope of one photo.
     * @type {number}
     * @memberof MatchImageResult
     */
    secondFaceIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchImageResult
     */
    score?: number;
    /**
     * 
     * @type {number}
     * @memberof MatchImageResult
     */
    similarity?: number;
    /**
     * 
     * @type {FaceSDKResultCode}
     * @memberof MatchImageResult
     */
    errorCode?: FaceSDKResultCode;
    /**
     * 
     * @type {string}
     * @memberof MatchImageResult
     */
    errorMsg?: string;
}


