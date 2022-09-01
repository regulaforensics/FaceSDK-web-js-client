/* tslint:disable */
/* eslint-disable */
/**
 * Regula FaceSDK Web API
 * Regula FaceSDK Web API
 *
 * The version of the OpenAPI document: 3.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @enum {string}
 */

export const FaceQualityScenarios = {
    QUALITY_FULL: 'QualityFull',
    QUALITY_ICAO: 'QualityICAO',
    QUALITY_VISA_SCHENGEN: 'QualityVisaSchengen',
    QUALITY_VISA_USA: 'QualityVisaUSA',
    CROP_CENTRAL_FACE: 'CropCentralFace',
    CROP_ALL_FACES: 'CropAllFaces',
    THUMBNAIL: 'Thumbnail'
} as const;

export type FaceQualityScenarios = typeof FaceQualityScenarios[keyof typeof FaceQualityScenarios];


