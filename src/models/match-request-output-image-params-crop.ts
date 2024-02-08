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



/**
 * Whether to return the Base64 of an aligned and cropped portrait in the `crop` field.
 * @export
 * @interface MatchRequestOutputImageParamsCrop
 */
export interface MatchRequestOutputImageParamsCrop {
    /**
     * The RGB value of a color for filling background behind a person\'s silhouette and for aligning the image.
     * @type {Array<number>}
     * @memberof MatchRequestOutputImageParamsCrop
     */
    'padColor'?: Array<number>;
    /**
     * Whether to return the coordinates of the rectangle with the face in the original image prepared for the face crop.
     * @type {boolean}
     * @memberof MatchRequestOutputImageParamsCrop
     */
    'returnOriginalRect'?: boolean;
    /**
     * The resize value in case `type` matches this value. If it doesn\'t, no resize is performed.
     * @type {Array<number>}
     * @memberof MatchRequestOutputImageParamsCrop
     */
    'size'?: Array<number>;
    /**
     * The aspect ratio according to which face alignment is performed during face detection.
     * @type {number}
     * @memberof MatchRequestOutputImageParamsCrop
     */
    'type'?: MatchRequestOutputImageParamsCropTypeEnum;
}

export const MatchRequestOutputImageParamsCropTypeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;

export type MatchRequestOutputImageParamsCropTypeEnum = typeof MatchRequestOutputImageParamsCropTypeEnum[keyof typeof MatchRequestOutputImageParamsCropTypeEnum];


