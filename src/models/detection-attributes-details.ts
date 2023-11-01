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


import { Any } from './any';

/**
 * 
 * @export
 * @interface DetectionAttributesDetails
 */
export interface DetectionAttributesDetails {
    /**
     * The name of the attribute.
     * @type {string}
     * @memberof DetectionAttributesDetails
     */
    'name'?: string;
    /**
     * The confidence score for the attribute.
     * @type {number}
     * @memberof DetectionAttributesDetails
     */
    'confidence'?: number;
    /**
     * Value.
     * @type {Any}
     * @memberof DetectionAttributesDetails
     */
    'value'?: Any;
}

