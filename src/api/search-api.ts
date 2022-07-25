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


    import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
    import { Configuration } from '../configuration.js';
    // Some imports not used depending on template conditions
    // @ts-ignore
    import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base.js';
        // @ts-ignore
        import { OperationLog } from '../models/index.js';
        // @ts-ignore
        import { SearchRequest } from '../models/index.js';
        // @ts-ignore
        import { SearchResult } from '../models/index.js';
    /**
    * SearchApi - axios parameter creator
    * @export
    */
    export const SearchApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
        * 
            * @summary Find person by image in groups scope
            * @param {SearchRequest} searchRequest Search argument
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        search: async (searchRequest: SearchRequest, options: any = {}): Promise<RequestArgs> => {
                    // verify required parameter 'searchRequest' is not null or undefined
                    if (searchRequest === null || searchRequest === undefined) {
                    throw new RequiredError('searchRequest','Required parameter searchRequest was null or undefined when calling search.');
                    }
            const localVarPath = `/api/search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
            baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


        
                    localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
            query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
            query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
                const needsSerialization = (typeof searchRequest !== "string" && !(searchRequest instanceof Uint8Array)) || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                localVarRequestOptions.data =  needsSerialization ? JSON.stringify(searchRequest !== undefined ? searchRequest : {}) : (searchRequest || "");

            return {
            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
            options: localVarRequestOptions,
            };
            },
        }
        };

        /**
        * SearchApi - functional programming interface
        * @export
        */
        export const SearchApiFp = function(configuration?: Configuration) {
        return {
            /**
            * 
                * @summary Find person by image in groups scope
                * @param {SearchRequest} searchRequest Search argument
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
            async search(searchRequest: SearchRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchResult>> {
            const localVarAxiosArgs = await SearchApiAxiosParamCreator(configuration).search(searchRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
            const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
            return axios.request(axiosRequestArgs);
            };
            },
        }
        };

        /**
        * SearchApi - factory interface
        * @export
        */
        export const SearchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
        return {
            /**
            * 
                * @summary Find person by image in groups scope
                * @param {SearchRequest} searchRequest Search argument
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
        search(searchRequest: SearchRequest, options?: any): AxiosPromise<SearchResult> {
            return SearchApiFp(configuration).search(searchRequest, options).then((request) => request(axios, basePath));
            },
        };
        };

        /**
        * SearchApi - object-oriented interface
        * @export
        * @class SearchApi
        * @extends {BaseAPI}
        */
            export class SearchApi extends BaseAPI {
            /**
            * 
                * @summary Find person by image in groups scope
                    * @param {SearchRequest} searchRequest Search argument
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof SearchApi
            */
                protected searchGen(searchRequest: SearchRequest, options?: any) {
                return SearchApiFp(this.configuration).search(searchRequest, options).then((request) => request(this.axios, this.basePath));
                }
        }
