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



/**
 * 
 * @export
 * @interface DetectionFace
 */
export interface DetectionFace {
    /**
     * The detected face index number.
     * @type {number}
     * @memberof DetectionFace
     */
    'faceIndex'?: number;
    /**
     * Absolute coordinates (x,y) of five points of each detected face: left eye, right eye, nose, left point of lips, right point of lips.
     * @type {Array<Array<number>>}
     * @memberof DetectionFace
     */
    'landmarks'?: Array<Array<number>>;
    /**
     * Angle of rotation of the face from the vertical axis, degrees.
     * @type {number}
     * @memberof DetectionFace
     */
    'rotationAngle'?: number;
    /**
     * The rectangular area of a detected face that is represented by a set of four elements: the X and Y coordinates of the top-left point, and the width and height dimensions of the rectangle.
     * @type {Array<number>}
     * @memberof DetectionFace
     */
    'roi'?: Array<number>;
    /**
     * Base64 of the cropped portrait.
     * @type {string}
     * @memberof DetectionFace
     */
    'thumbnail'?: string;
    /**
     * Base64 of the cropped portrait.
     * @type {string}
     * @memberof DetectionFace
     */
    'crop'?: string;
}

