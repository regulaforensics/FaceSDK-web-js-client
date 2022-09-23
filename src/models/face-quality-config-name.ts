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
 * All image characteristics that can be assessed during face image quality assessment.
 * @export
 * @enum {string}
 */

export const FaceQualityConfigName = {
    ART_FACE: 'ArtFace',
    IMAGE_WIDTH: 'ImageWidth',
    IMAGE_HEIGHT: 'ImageHeight',
    IMAGE_WIDTH_TO_HEIGHT: 'ImageWidthToHeight',
    IMAGE_CHANNELS_NUMBER: 'ImageChannelsNumber',
    PADDING_RATIO: 'PaddingRatio',
    FACE_MID_POINT_HORIZONTAL_POSITION: 'FaceMidPointHorizontalPosition',
    FACE_MID_POINT_VERTICAL_POSITION: 'FaceMidPointVerticalPosition',
    HEAD_WIDTH_RATIO: 'HeadWidthRatio',
    HEAD_HEIGHT_RATIO: 'HeadHeightRatio',
    EYES_DISTANCE: 'EyesDistance',
    YAW: 'Yaw',
    PITCH: 'Pitch',
    ROLL: 'Roll',
    BLUR_LEVEL: 'BlurLevel',
    NOISE_LEVEL: 'NoiseLevel',
    EYE_RIGHT_CLOSED: 'EyeRightClosed',
    EYE_LEFT_CLOSED: 'EyeLeftClosed',
    EYE_RIGHT_OCCLUDED: 'EyeRightOccluded',
    EYE_LEFT_OCCLUDED: 'EyeLeftOccluded',
    EYES_RED: 'EyesRed',
    EYE_RIGHT_COVERED_WITH_HAIR: 'EyeRightCoveredWithHair',
    EYE_LEFT_COVERED_WITH_HAIR: 'EyeLeftCoveredWithHair',
    OFF_GAZE: 'OffGaze',
    FACE_DYNAMIC_RANGE: 'FaceDynamicRange',
    UNNATURAL_SKIN_TONE: 'UnnaturalSkinTone',
    TOO_DARK: 'TooDark',
    TOO_LIGHT: 'TooLight',
    FACE_GLARE: 'FaceGlare',
    SHADOWS_ON_FACE: 'ShadowsOnFace',
    DARK_GLASSES: 'DarkGlasses',
    REFLECTION_ON_GLASSES: 'ReflectionOnGlasses',
    FRAMES_TOO_HEAVY: 'FramesTooHeavy',
    FACE_OCCLUDED: 'FaceOccluded',
    HEAD_COVERING: 'HeadCovering',
    BACKGROUND_UNIFORMITY: 'BackgroundUniformity',
    SHADOWS_ON_BACKGROUND: 'ShadowsOnBackground',
    OTHER_FACES: 'OtherFaces',
    SHOULDERS_POSE: 'ShouldersPose',
    EXPRESSION_LEVEL: 'ExpressionLevel',
    MOUTH_OPEN: 'MouthOpen',
    FOREHEAD_COVERING: 'ForeheadCovering',
    SMILE: 'Smile',
    STRONG_MAKEUP: 'StrongMakeup',
    HEADPHONES: 'Headphones',
    MEDICAL_MASK: 'MedicalMask',
    BACKGROUND_COLOR_MATCH: 'BackgroundColorMatch'
} as const;

export type FaceQualityConfigName = typeof FaceQualityConfigName[keyof typeof FaceQualityConfigName];



