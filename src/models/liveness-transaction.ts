/* tslint:disable */
/* eslint-disable */
/**
 * Regula FaceSDK Web API
 * Regula FaceSDK Web API # Clients * [JavaScript](https://github.com/regulaforensics/FaceSDK-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/FaceSDK-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/FaceSDK-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/FaceSDK-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 4.1.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface LivenessTransaction
 */
export interface LivenessTransaction {
    /**
     * 
     * @type {number}
     * @memberof LivenessTransaction
     */
    'code'?: number;
    /**
     * A free-form object containing additional transaction attributes.
     * @type {{ [key: string]: object; }}
     * @memberof LivenessTransaction
     */
    'config'?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof LivenessTransaction
     */
    'elapsed'?: number;
    /**
     * URL for portrait image
     * @type {string}
     * @memberof LivenessTransaction
     */
    'portrait'?: string;
    /**
     * 
     * @type {string}
     * @memberof LivenessTransaction
     */
    'sessionId'?: string;
    /**
     * Whether the liveness detection is confirmed (0) or not (1)
     * @type {number}
     * @memberof LivenessTransaction
     */
    'status'?: number;
    /**
     * 
     * @type {string}
     * @memberof LivenessTransaction
     */
    'transactionId'?: string;
    /**
     * 
     * @type {string}
     * @memberof LivenessTransaction
     */
    'video'?: string;
    /**
     * A free-form object containing the request information (server time, client IP, etc.).
     * @type {{ [key: string]: object; }}
     * @memberof LivenessTransaction
     */
    'metadata'?: { [key: string]: object; };
}

