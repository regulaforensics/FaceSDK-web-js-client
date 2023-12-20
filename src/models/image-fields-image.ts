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


import { ResizeOptions } from './resize-options';
import { ImageData } from './image-data';

/**
 * Uploaded image.
 * @export
 * @interface ImageFieldsImage
 */
export interface ImageFieldsImage {
    /**
     * Original media type of the uploaded image.
     * @type {string}
     * @memberof ImageFieldsImage
     */
    'contentType'?: string;
    /**
     * 
     * @type {ImageData}
     * @memberof ImageFieldsImage
     */
    'content'?: ImageData;
    /**
     * Image URL.
     * @type {string}
     * @memberof ImageFieldsImage
     */
    'imageUrl'?: string;
    /**
     * 
     * @type {ResizeOptions}
     * @memberof ImageFieldsImage
     */
    'resizeOptions'?: ResizeOptions;
}

