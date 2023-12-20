/* tslint:disable */
/* eslint-disable */
/**
 * Regula FaceSDK Web API
 * Regula FaceSDK Web API # Clients * [JavaScript](https://github.com/regulaforensics/FaceSDK-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/FaceSDK-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/FaceSDK-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/FaceSDK-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ImageFieldsImage } from './image-fields-image';
import { OutputImageParams } from './output-image-params';

/**
 * Image in the request data, includes image and contentType.
 * @export
 * @interface ImageFields
 */
export interface ImageFields {
    /**
     * Session identificator.
     * @type {string}
     * @memberof ImageFields
     */
    'tag'?: string;
    /**
     * 
     * @type {ImageFieldsImage}
     * @memberof ImageFields
     */
    'image'?: ImageFieldsImage;
    /**
     * 
     * @type {OutputImageParams}
     * @memberof ImageFields
     */
    'outputImageParams'?: OutputImageParams;
    /**
     * Whether to detect all faces in the image. If set to false, only the most central face is detected.
     * @type {boolean}
     * @memberof ImageFields
     */
    'detectAll'?: boolean;
    /**
     * The similarity threshold.
     * @type {number}
     * @memberof ImageFields
     */
    'threshold'?: number;
    /**
     * The maximum number of results to be returned.
     * @type {number}
     * @memberof ImageFields
     */
    'limit'?: number;
}

