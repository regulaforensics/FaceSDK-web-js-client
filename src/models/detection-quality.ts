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
import { FaceQualityConfigName } from './face-quality-config-name';
// May contain unused imports in some cases
// @ts-ignore
import { QualityDetail } from './quality-detail';
// May contain unused imports in some cases
// @ts-ignore
import { QualityDetailsGroups } from './quality-details-groups';

/**
 * Field for checking the portrait quality. If it is not mentioned, no quality check is performed.
 * @export
 * @interface DetectionQuality
 */
export interface DetectionQuality {
    /**
     * The array of all the non-compliant assessment characteristics.
     * @type {Array<FaceQualityConfigName>}
     * @memberof DetectionQuality
     */
    'nonCompliant'?: Array<FaceQualityConfigName>;
    /**
     * The array of the assessment results for each group of characteristics.
     * @type {Array<QualityDetailsGroups>}
     * @memberof DetectionQuality
     */
    'detailsGroups'?: Array<QualityDetailsGroups>;
    /**
     * The array of the assessment characteristics that were set in the request.
     * @type {Array<QualityDetail>}
     * @memberof DetectionQuality
     */
    'details'?: Array<QualityDetail>;
    /**
     * Returns the estimated portrait quality assessment result, a number from 0 to 1, where 1 is for absolute compliance.
     * @type {number}
     * @memberof DetectionQuality
     */
    'score'?: number;
    /**
     * The total time the quality assessment has taken.
     * @type {number}
     * @memberof DetectionQuality
     */
    'timer'?: number;
}

