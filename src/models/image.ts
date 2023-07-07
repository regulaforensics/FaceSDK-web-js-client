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



/**
 * Image in the response.
 * @export
 * @interface Image
 */
export interface Image {
    /**
     * Response image ID. The list is sorted by decreasing ID value.
     * @type {number}
     * @memberof Image
     */
    'id'?: number;
    /**
     * Original media type of the returned image.
     * @type {string}
     * @memberof Image
     */
    'contentType'?: string;
    /**
     * Returned image creation date.
     * @type {string}
     * @memberof Image
     */
    'createdAt'?: string;
    /**
     * Returned image update date.
     * @type {string}
     * @memberof Image
     */
    'updatedAt'?: string;
    /**
     * Returned image S3 path.
     * @type {string}
     * @memberof Image
     */
    'path'?: string;
    /**
     * Returned image URL.
     * @type {string}
     * @memberof Image
     */
    'url'?: string;
    /**
     * A free-form object containing person\'s extended attributes.
     * @type {{ [key: string]: object; }}
     * @memberof Image
     */
    'metadata'?: { [key: string]: object; };
}

