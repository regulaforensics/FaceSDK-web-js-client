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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Group } from '../models';
// @ts-ignore
import { GroupPage } from '../models';
// @ts-ignore
import { GroupToCreate } from '../models';
// @ts-ignore
import { OperationLog } from '../models';
// @ts-ignore
import { PersonsPage } from '../models';
// @ts-ignore
import { UpdateGroup } from '../models';
/**
 * GroupApi - axios parameter creator
 * @export
 */
export const GroupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create group
         * @param {GroupToCreate} groupToCreate Request body for the group to create.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGroup: async (groupToCreate: GroupToCreate, xRequestID?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupToCreate' is not null or undefined
            assertParamExists('createGroup', 'groupToCreate', groupToCreate)
            const localVarPath = `/api/groups`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(groupToCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete group
         * @param {string} groupId Group ID.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGroup: async (groupId: string, xRequestID?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('deleteGroup', 'groupId', groupId)
            const localVarPath = `/api/groups/{groupId}`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-RequestID'] = String(xRequestID);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get groups
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllGroups: async (page: number, size: number, xRequestID?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            assertParamExists('getAllGroups', 'page', page)
            // verify required parameter 'size' is not null or undefined
            assertParamExists('getAllGroups', 'size', size)
            const localVarPath = `/api/groups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-RequestID'] = String(xRequestID);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get group persons
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {string} groupId Group ID.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPersonsByGroupId: async (page: number, size: number, groupId: string, xRequestID?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            assertParamExists('getAllPersonsByGroupId', 'page', page)
            // verify required parameter 'size' is not null or undefined
            assertParamExists('getAllPersonsByGroupId', 'size', size)
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('getAllPersonsByGroupId', 'groupId', groupId)
            const localVarPath = `/api/groups/{groupId}/persons`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-RequestID'] = String(xRequestID);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get group
         * @param {string} groupId Group ID.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroup: async (groupId: string, xRequestID?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('getGroup', 'groupId', groupId)
            const localVarPath = `/api/groups/{groupId}`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-RequestID'] = String(xRequestID);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update group
         * @param {string} groupId Group ID.
         * @param {GroupToCreate} groupToCreate Request body for the group to update.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGroup: async (groupId: string, groupToCreate: GroupToCreate, xRequestID?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('updateGroup', 'groupId', groupId)
            // verify required parameter 'groupToCreate' is not null or undefined
            assertParamExists('updateGroup', 'groupToCreate', groupToCreate)
            const localVarPath = `/api/groups/{groupId}`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-RequestID'] = String(xRequestID);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(groupToCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Add/remove persons to group
         * @param {string} groupId Group ID.
         * @param {UpdateGroup} updateGroup Request body for person IDs to add or remove.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePersonsInGroup: async (groupId: string, updateGroup: UpdateGroup, xRequestID?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('updatePersonsInGroup', 'groupId', groupId)
            // verify required parameter 'updateGroup' is not null or undefined
            assertParamExists('updatePersonsInGroup', 'updateGroup', updateGroup)
            const localVarPath = `/api/groups/{groupId}/persons`
                .replace(`{${"groupId"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-RequestID'] = String(xRequestID);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateGroup, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupApi - functional programming interface
 * @export
 */
export const GroupApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create group
         * @param {GroupToCreate} groupToCreate Request body for the group to create.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createGroup(groupToCreate: GroupToCreate, xRequestID?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Group>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createGroup(groupToCreate, xRequestID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete group
         * @param {string} groupId Group ID.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGroup(groupId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteGroup(groupId, xRequestID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get groups
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllGroups(page: number, size: number, xRequestID?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllGroups(page, size, xRequestID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get group persons
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {string} groupId Group ID.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllPersonsByGroupId(page: number, size: number, groupId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PersonsPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllPersonsByGroupId(page, size, groupId, xRequestID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get group
         * @param {string} groupId Group ID.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroup(groupId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Group>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroup(groupId, xRequestID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update group
         * @param {string} groupId Group ID.
         * @param {GroupToCreate} groupToCreate Request body for the group to update.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGroup(groupId: string, groupToCreate: GroupToCreate, xRequestID?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateGroup(groupId, groupToCreate, xRequestID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Add/remove persons to group
         * @param {string} groupId Group ID.
         * @param {UpdateGroup} updateGroup Request body for person IDs to add or remove.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePersonsInGroup(groupId: string, updateGroup: UpdateGroup, xRequestID?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePersonsInGroup(groupId, updateGroup, xRequestID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupApi - factory interface
 * @export
 */
export const GroupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupApiFp(configuration)
    return {
        /**
         * 
         * @summary Create group
         * @param {GroupToCreate} groupToCreate Request body for the group to create.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGroup(groupToCreate: GroupToCreate, xRequestID?: string, options?: any): AxiosPromise<Group> {
            return localVarFp.createGroup(groupToCreate, xRequestID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete group
         * @param {string} groupId Group ID.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGroup(groupId: string, xRequestID?: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteGroup(groupId, xRequestID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get groups
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllGroups(page: number, size: number, xRequestID?: string, options?: any): AxiosPromise<GroupPage> {
            return localVarFp.getAllGroups(page, size, xRequestID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get group persons
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {string} groupId Group ID.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPersonsByGroupId(page: number, size: number, groupId: string, xRequestID?: string, options?: any): AxiosPromise<PersonsPage> {
            return localVarFp.getAllPersonsByGroupId(page, size, groupId, xRequestID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get group
         * @param {string} groupId Group ID.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroup(groupId: string, xRequestID?: string, options?: any): AxiosPromise<Group> {
            return localVarFp.getGroup(groupId, xRequestID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update group
         * @param {string} groupId Group ID.
         * @param {GroupToCreate} groupToCreate Request body for the group to update.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGroup(groupId: string, groupToCreate: GroupToCreate, xRequestID?: string, options?: any): AxiosPromise<void> {
            return localVarFp.updateGroup(groupId, groupToCreate, xRequestID, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Add/remove persons to group
         * @param {string} groupId Group ID.
         * @param {UpdateGroup} updateGroup Request body for person IDs to add or remove.
         * @param {string} [xRequestID] Request header label.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePersonsInGroup(groupId: string, updateGroup: UpdateGroup, xRequestID?: string, options?: any): AxiosPromise<void> {
            return localVarFp.updatePersonsInGroup(groupId, updateGroup, xRequestID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupApi - object-oriented interface
 * @export
 * @class GroupApi
 * @extends {BaseAPI}
 */
export class GroupApi extends BaseAPI {
    /**
     * 
     * @summary Create group
     * @param {GroupToCreate} groupToCreate Request body for the group to create.
     * @param {string} [xRequestID] Request header label.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public createGroup(groupToCreate: GroupToCreate, xRequestID?: string, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).createGroup(groupToCreate, xRequestID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete group
     * @param {string} groupId Group ID.
     * @param {string} [xRequestID] Request header label.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public deleteGroup(groupId: string, xRequestID?: string, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).deleteGroup(groupId, xRequestID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get groups
     * @param {number} page The page number to get a list of persons or groups.
     * @param {number} size The page size with a list of persons or groups, items.
     * @param {string} [xRequestID] Request header label.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public getAllGroups(page: number, size: number, xRequestID?: string, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).getAllGroups(page, size, xRequestID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get group persons
     * @param {number} page The page number to get a list of persons or groups.
     * @param {number} size The page size with a list of persons or groups, items.
     * @param {string} groupId Group ID.
     * @param {string} [xRequestID] Request header label.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public getAllPersonsByGroupId(page: number, size: number, groupId: string, xRequestID?: string, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).getAllPersonsByGroupId(page, size, groupId, xRequestID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get group
     * @param {string} groupId Group ID.
     * @param {string} [xRequestID] Request header label.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public getGroup(groupId: string, xRequestID?: string, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).getGroup(groupId, xRequestID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update group
     * @param {string} groupId Group ID.
     * @param {GroupToCreate} groupToCreate Request body for the group to update.
     * @param {string} [xRequestID] Request header label.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public updateGroup(groupId: string, groupToCreate: GroupToCreate, xRequestID?: string, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).updateGroup(groupId, groupToCreate, xRequestID, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Add/remove persons to group
     * @param {string} groupId Group ID.
     * @param {UpdateGroup} updateGroup Request body for person IDs to add or remove.
     * @param {string} [xRequestID] Request header label.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupApi
     */
    public updatePersonsInGroup(groupId: string, updateGroup: UpdateGroup, xRequestID?: string, options?: AxiosRequestConfig) {
        return GroupApiFp(this.configuration).updatePersonsInGroup(groupId, updateGroup, xRequestID, options).then((request) => request(this.axios, this.basePath));
    }
}
