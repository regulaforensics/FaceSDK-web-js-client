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
// @ts-ignore
import { MatchRequest } from '../models';
// @ts-ignore
import { MatchResponse } from '../models';
/**
 * MatchingApi - axios parameter creator
 * @export
 */
export const MatchingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Detect facial coordinates
         * @param {DetectRequest} detectRequest 
         * @param {string} [xRequestID] 
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
        /**
         * 
         * @summary Compare provided face images in all combinations and return similarity score for each pair.
         * @param {MatchRequest} matchRequest 
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        match: async (matchRequest: MatchRequest, xRequestID?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'matchRequest' is not null or undefined
            assertParamExists('match', 'matchRequest', matchRequest)
            const localVarPath = `/api/match`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(matchRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MatchingApi - functional programming interface
 * @export
 */
export const MatchingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MatchingApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Detect facial coordinates
         * @param {DetectRequest} detectRequest 
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async detect(detectRequest: DetectRequest, xRequestID?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DetectResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.detect(detectRequest, xRequestID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Compare provided face images in all combinations and return similarity score for each pair.
         * @param {MatchRequest} matchRequest 
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async match(matchRequest: MatchRequest, xRequestID?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MatchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.match(matchRequest, xRequestID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MatchingApi - factory interface
 * @export
 */
export const MatchingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MatchingApiFp(configuration)
    return {
        /**
         * 
         * @summary Detect facial coordinates
         * @param {DetectRequest} detectRequest 
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        detect(detectRequest: DetectRequest, xRequestID?: string, options?: any): AxiosPromise<DetectResponse> {
            return localVarFp.detect(detectRequest, xRequestID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Compare provided face images in all combinations and return similarity score for each pair.
         * @param {MatchRequest} matchRequest 
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        match(matchRequest: MatchRequest, xRequestID?: string, options?: any): AxiosPromise<MatchResponse> {
            return localVarFp.match(matchRequest, xRequestID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MatchingApi - object-oriented interface
 * @export
 * @class MatchingApi
 * @extends {BaseAPI}
 */
export class MatchingApi extends BaseAPI {
    /**
     * 
     * @summary Detect facial coordinates
     * @param {DetectRequest} detectRequest 
     * @param {string} [xRequestID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MatchingApi
     */
    public detect(detectRequest: DetectRequest, xRequestID?: string, options?: AxiosRequestConfig) {
        return MatchingApiFp(this.configuration).detect(detectRequest, xRequestID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Compare provided face images in all combinations and return similarity score for each pair.
     * @param {MatchRequest} matchRequest 
     * @param {string} [xRequestID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MatchingApi
     */
    public match(matchRequest: MatchRequest, xRequestID?: string, options?: AxiosRequestConfig) {
        return MatchingApiFp(this.configuration).match(matchRequest, xRequestID, options).then((request) => request(this.axios, this.basePath));
    }
}
