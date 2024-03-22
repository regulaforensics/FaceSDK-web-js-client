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
import { TransactionInfo } from '../models';
/**
 * LivenessAssessmentApi - axios parameter creator
 * @export
 */
export const LivenessAssessmentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Liveness assessment
         * @param {string} transactionId ID of the current liveness transaction.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLivenessTransactionInfo: async (transactionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('getLivenessTransactionInfo', 'transactionId', transactionId)
            const localVarPath = `/api/v2/liveness`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (transactionId !== undefined) {
                localVarQueryParameter['transactionId'] = transactionId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LivenessAssessmentApi - functional programming interface
 * @export
 */
export const LivenessAssessmentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LivenessAssessmentApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Liveness assessment
         * @param {string} transactionId ID of the current liveness transaction.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLivenessTransactionInfo(transactionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLivenessTransactionInfo(transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LivenessAssessmentApi - factory interface
 * @export
 */
export const LivenessAssessmentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LivenessAssessmentApiFp(configuration)
    return {
        /**
         * 
         * @summary Liveness assessment
         * @param {string} transactionId ID of the current liveness transaction.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLivenessTransactionInfo(transactionId: string, options?: any): AxiosPromise<TransactionInfo> {
            return localVarFp.getLivenessTransactionInfo(transactionId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LivenessAssessmentApi - object-oriented interface
 * @export
 * @class LivenessAssessmentApi
 * @extends {BaseAPI}
 */
export class LivenessAssessmentApi extends BaseAPI {
    /**
     * 
     * @summary Liveness assessment
     * @param {string} transactionId ID of the current liveness transaction.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LivenessAssessmentApi
     */
    public getLivenessTransactionInfo(transactionId: string, options?: AxiosRequestConfig) {
        return LivenessAssessmentApiFp(this.configuration).getLivenessTransactionInfo(transactionId, options).then((request) => request(this.axios, this.basePath));
    }
}
