/* tslint:disable */
/* eslint-disable */
/**
 * Regula Face SDK Web API
 * <a href=\"https://regulaforensics.com/products/face-recognition-sdk/  \" target=\"_blank\">Regula Face SDK</a> is a cross-platform biometric verification solution for a digital identity verification process. The SDK enables convenient and reliable face capture on the client side (mobile, web, and desktop) and further processing on the client or server side.  The Face SDK includes the following features:  * <a href=\"https://docs.regulaforensics.com/develop/face-sdk/overview/introduction/#face-detection\" target=\"_blank\">Face Detection</a> * <a href=\"https://docs.regulaforensics.com/develop/face-sdk/overview/introduction/#face-comparison-11\" target=\"_blank\">Face Match (1:1)</a> * <a href=\"https://docs.regulaforensics.com/develop/face-sdk/overview/introduction/#face-identification-1n\" target=\"_blank\">Face Search (1:N)</a> * <a href=\"https://docs.regulaforensics.com/develop/face-sdk/overview/introduction/#liveness-assessment\" target=\"_blank\">Liveness Assessment</a>  Here is the <a href=\"https://github.com/regulaforensics/FaceSDK-web-openapi  \" target=\"_blank\">OpenAPI specification on GitHub</a>.   ### Clients * [JavaScript](https://github.com/regulaforensics/FaceSDK-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/FaceSDK-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/FaceSDK-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/FaceSDK-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { DetectRequest } from '../models';
// @ts-ignore
import { DetectResponse } from '../models';
/**
 * FaceDetectionApi - axios parameter creator
 * @export
 */
export const FaceDetectionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Detect face, evaluate attributes, assess the portrait quality
         * @summary detect faces
         * @param {DetectRequest} detectRequest 
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        detect: async (detectRequest: DetectRequest, xRequestID?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'detectRequest' is not null or undefined
            assertParamExists('detect', 'detectRequest', detectRequest)
            const localVarPath = `/api/detect`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-RequestID'] = String(xRequestID);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(detectRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FaceDetectionApi - functional programming interface
 * @export
 */
export const FaceDetectionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FaceDetectionApiAxiosParamCreator(configuration)
    return {
        /**
         * Detect face, evaluate attributes, assess the portrait quality
         * @summary detect faces
         * @param {DetectRequest} detectRequest 
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async detect(detectRequest: DetectRequest, xRequestID?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DetectResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.detect(detectRequest, xRequestID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FaceDetectionApi - factory interface
 * @export
 */
export const FaceDetectionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FaceDetectionApiFp(configuration)
    return {
        /**
         * Detect face, evaluate attributes, assess the portrait quality
         * @summary detect faces
         * @param {DetectRequest} detectRequest 
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        detect(detectRequest: DetectRequest, xRequestID?: string, options?: any): AxiosPromise<DetectResponse> {
            return localVarFp.detect(detectRequest, xRequestID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FaceDetectionApi - object-oriented interface
 * @export
 * @class FaceDetectionApi
 * @extends {BaseAPI}
 */
export class FaceDetectionApi extends BaseAPI {
    /**
     * Detect face, evaluate attributes, assess the portrait quality
     * @summary detect faces
     * @param {DetectRequest} detectRequest 
     * @param {string} [xRequestID] Request header label.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaceDetectionApi
     */
    public detect(detectRequest: DetectRequest, xRequestID?: string, options?: AxiosRequestConfig) {
        return FaceDetectionApiFp(this.configuration).detect(detectRequest, xRequestID, options).then((request) => request(this.axios, this.basePath));
    }
}