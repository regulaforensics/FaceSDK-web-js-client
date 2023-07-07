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


import { DetectRequestAttributes } from './detect-request-attributes';
import { ProcessParam } from './process-param';
import { ImageData } from './image-data';

/**
 * 
 * @export
 * @interface DetectRequest
 */
export interface DetectRequest {
    /**
     * Session identificator.
     * @type {string}
     * @memberof DetectRequest
     */
    'tag'?: string;
    /**
     * 
     * @type {ProcessParam}
     * @memberof DetectRequest
     */
    'processParam'?: ProcessParam;
    /**
     * 
     * @type {ImageData}
     * @memberof DetectRequest
     */
    'image'?: ImageData;
    /**
     * Whether to return the cropped portrains with the detected faces.
     * @type {boolean}
     * @memberof DetectRequest
     */
    'thumbnails'?: boolean;
    /**
     * 
     * @type {DetectRequestAttributes}
     * @memberof DetectRequest
     */
    'attributes'?: DetectRequestAttributes;
}

