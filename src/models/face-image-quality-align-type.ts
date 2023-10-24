/* tslint:disable */
/* eslint-disable */
/**
 * Regula FaceSDK Web api
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
 * The aspect ratio according to which face alignment is performed during face detection.
 * @export
 * @enum {string}
 */

export const FaceImageQualityAlignType = {
    ALIGN_3x4: 0,
    ALIGN_4x5: 1,
    ALIGN_2x3: 2,
    ALIGN_1x1: 3,
    ALIGN_7x9: 4
} as const;

export type FaceImageQualityAlignType = typeof FaceImageQualityAlignType[keyof typeof FaceImageQualityAlignType];



