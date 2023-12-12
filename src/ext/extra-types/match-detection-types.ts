import { DetectionQuality, FaceQualityScenarios, FaceSDKResult } from '../../models';
import { ImageData } from '../../models/image-data';

type TDetection = {
    /**
     *
     * @type {ImageData}
     * @memberof Detection
     */
    crop?: ImageData;
    /**
     *
     * @memberof Detection
     */
    attributes?: {
        /**
         *
         * @type {Array<{ name?: string; confidence?: number; value?: any; }>}
         */
        details?: { name?: string; confidence?: number; value?: any }[];
        /**
         * The elapsed time for attribute detection.
         * @type {number}
         */
        elapsedTime?: number;
    };
    /**
     * Absolute coordinates (x,y) of five points of each detected face: left eye, right eye, nose, left point of lips, right point of lips.
     * @type {Array<Array<number>>}
     * @memberof Detection
     */
    landmarks: Array<Array<number>>;
    /**
     *
     * @type {DetectionQuality}
     * @memberof Detection
     */
    quality?: DetectionQuality;
    /**
     * The rectangular area of a detected face that is represented by a set of four elements: the X and Y coordinates of the top-left point, and the width and height dimensions of the rectangle.
     * @type {Array<number>}
     * @memberof Detection
     */
    roi: Array<number>;
    /**
     * Base64 of the cropped portrait.
     * @type {string}
     * @memberof Detection
     */
    thumbnail?: string;
};

export type TDetectResponse = {
    results?: {
        /**
         *
         * @type {Array<Detection>}
         * @memberof DetectResult
         */
        detections: Array<TDetection>;
        /**
         * Internal.
         * @type {number}
         * @memberof DetectResult
         */
        detectorType?: number;
        /**
         * Internal.
         * @type {number}
         * @memberof DetectResult
         */
        landmarksType?: number;
        /**
         *
         * @type {FaceQualityScenarios}
         * @memberof DetectResult
         */
        scenario?: FaceQualityScenarios;
        /**
         * The total time taken for the detection.
         * @type {number}
         * @memberof DetectResult
         */
        timer?: number;
    };
} & FaceSDKResult;
