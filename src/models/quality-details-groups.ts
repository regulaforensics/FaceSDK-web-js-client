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
import { FaceImageQualityGroups } from './face-image-quality-groups';
// May contain unused imports in some cases
// @ts-ignore
import { FaceImageQualityGroupsStrings } from './face-image-quality-groups-strings';

/**
 * 
 * @export
 * @interface QualityDetailsGroups
 */
export interface QualityDetailsGroups {
    /**
     * 
     * @type {FaceImageQualityGroups}
     * @memberof QualityDetailsGroups
     */
    'groupId'?: FaceImageQualityGroups;
    /**
     * 
     * @type {FaceImageQualityGroupsStrings}
     * @memberof QualityDetailsGroups
     */
    'name'?: FaceImageQualityGroupsStrings;
    /**
     * The total number of characteristics in the group.
     * @type {number}
     * @memberof QualityDetailsGroups
     */
    'totalCount'?: number;
    /**
     * The number of compliant characteristics in the group.
     * @type {number}
     * @memberof QualityDetailsGroups
     */
    'compliantCount'?: number;
}



