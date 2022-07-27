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
        import { Group } from '../models/index.js';
        // @ts-ignore
        import { GroupPage } from '../models/index.js';
        // @ts-ignore
        import { GroupToCreate } from '../models/index.js';
        // @ts-ignore
        import { Model1groups1groupId } from '../models/index.js';
        // @ts-ignore
        import { Model1groups1groupId1persons } from '../models/index.js';
        // @ts-ignore
        import { OperationLog } from '../models/index.js';
        // @ts-ignore
        import { UpdateGroup } from '../models/index.js';
    /**
    * GroupApi - axios parameter creator
    * @export
    */
    export const GroupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
        * 
            * @summary Create group
            * @param {GroupToCreate} groupToCreate Group to create
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        createGroup: async (groupToCreate: GroupToCreate, options: any = {}): Promise<RequestArgs> => {
                    // verify required parameter 'groupToCreate' is not null or undefined
                    if (groupToCreate === null || groupToCreate === undefined) {
                    throw new RequiredError('groupToCreate','Required parameter groupToCreate was null or undefined when calling createGroup.');
                    }
            const localVarPath = `/api/groups`;
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
                const needsSerialization = (typeof groupToCreate !== "string" && !(groupToCreate instanceof Uint8Array)) || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                localVarRequestOptions.data =  needsSerialization ? JSON.stringify(groupToCreate !== undefined ? groupToCreate : {}) : (groupToCreate || "");

            return {
            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
            options: localVarRequestOptions,
            };
            },
        /**
        * 
            * @summary Delete group
            * @param {number} groupId Group id
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        deleteGroup: async (groupId: number, options: any = {}): Promise<RequestArgs> => {
                    // verify required parameter 'groupId' is not null or undefined
                    if (groupId === null || groupId === undefined) {
                    throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteGroup.');
                    }
            const localVarPath = `/api/groups/{group_id}`
                .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
            baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


        
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

            return {
            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
            options: localVarRequestOptions,
            };
            },
        /**
        * 
            * @summary Get groups
            * @param {number} page Current page
            * @param {number} size Page size
            * @param {string} [name] Group name keywords
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        getAllGroups: async (page: number, size: number, name?: string, options: any = {}): Promise<RequestArgs> => {
                    // verify required parameter 'page' is not null or undefined
                    if (page === null || page === undefined) {
                    throw new RequiredError('page','Required parameter page was null or undefined when calling getAllGroups.');
                    }
                    // verify required parameter 'size' is not null or undefined
                    if (size === null || size === undefined) {
                    throw new RequiredError('size','Required parameter size was null or undefined when calling getAllGroups.');
                    }
            const localVarPath = `/api/groups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
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

                    if (name !== undefined) {
                            localVarQueryParameter['name'] = name;
                    }


        
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

            return {
            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
            options: localVarRequestOptions,
            };
            },
        /**
        * 
            * @summary Get group persons
            * @param {number} page Current page
            * @param {number} size Page size
            * @param {number} groupId Group id
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        getAllPersonsByGroupId: async (page: number, size: number, groupId: number, options: any = {}): Promise<RequestArgs> => {
                    // verify required parameter 'page' is not null or undefined
                    if (page === null || page === undefined) {
                    throw new RequiredError('page','Required parameter page was null or undefined when calling getAllPersonsByGroupId.');
                    }
                    // verify required parameter 'size' is not null or undefined
                    if (size === null || size === undefined) {
                    throw new RequiredError('size','Required parameter size was null or undefined when calling getAllPersonsByGroupId.');
                    }
                    // verify required parameter 'groupId' is not null or undefined
                    if (groupId === null || groupId === undefined) {
                    throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling getAllPersonsByGroupId.');
                    }
            const localVarPath = `/api/groups/{group_id}/persons`
                .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
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

            return {
            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
            options: localVarRequestOptions,
            };
            },
        /**
        * 
            * @summary Get group
            * @param {number} groupId Group id
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        getGroup: async (groupId: number, options: any = {}): Promise<RequestArgs> => {
                    // verify required parameter 'groupId' is not null or undefined
                    if (groupId === null || groupId === undefined) {
                    throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling getGroup.');
                    }
            const localVarPath = `/api/groups/{group_id}`
                .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
            baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


        
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

            return {
            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
            options: localVarRequestOptions,
            };
            },
        /**
        * 
            * @summary Update group
            * @param {number} groupId Group id
            * @param {Model1groups1groupId} body Metadata
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        updateGroup: async (groupId: number, body: Model1groups1groupId, options: any = {}): Promise<RequestArgs> => {
                    // verify required parameter 'groupId' is not null or undefined
                    if (groupId === null || groupId === undefined) {
                    throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateGroup.');
                    }
                    // verify required parameter 'body' is not null or undefined
                    if (body === null || body === undefined) {
                    throw new RequiredError('body','Required parameter body was null or undefined when calling updateGroup.');
                    }
            const localVarPath = `/api/groups/{group_id}`
                .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
            baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
                const needsSerialization = (typeof body !== "string" && !(body instanceof Uint8Array)) || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
            options: localVarRequestOptions,
            };
            },
        /**
        * 
            * @summary Add/remove persons to group
            * @param {number} groupId Group id
            * @param {UpdateGroup} updateGroup Person ids to add or remove
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        updatePersonsInGroup: async (groupId: number, updateGroup: UpdateGroup, options: any = {}): Promise<RequestArgs> => {
                    // verify required parameter 'groupId' is not null or undefined
                    if (groupId === null || groupId === undefined) {
                    throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updatePersonsInGroup.');
                    }
                    // verify required parameter 'updateGroup' is not null or undefined
                    if (updateGroup === null || updateGroup === undefined) {
                    throw new RequiredError('updateGroup','Required parameter updateGroup was null or undefined when calling updatePersonsInGroup.');
                    }
            const localVarPath = `/api/groups/{group_id}/persons`
                .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
            baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
                const needsSerialization = (typeof updateGroup !== "string" && !(updateGroup instanceof Uint8Array)) || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                localVarRequestOptions.data =  needsSerialization ? JSON.stringify(updateGroup !== undefined ? updateGroup : {}) : (updateGroup || "");

            return {
            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
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
        return {
            /**
            * 
                * @summary Create group
                * @param {GroupToCreate} groupToCreate Group to create
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
            async createGroup(groupToCreate: GroupToCreate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Group>> {
            const localVarAxiosArgs = await GroupApiAxiosParamCreator(configuration).createGroup(groupToCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
            const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
            return axios.request(axiosRequestArgs);
            };
            },
            /**
            * 
                * @summary Delete group
                * @param {number} groupId Group id
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
            async deleteGroup(groupId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await GroupApiAxiosParamCreator(configuration).deleteGroup(groupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
            const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
            return axios.request(axiosRequestArgs);
            };
            },
            /**
            * 
                * @summary Get groups
                * @param {number} page Current page
                * @param {number} size Page size
                * @param {string} [name] Group name keywords
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
            async getAllGroups(page: number, size: number, name?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupPage>> {
            const localVarAxiosArgs = await GroupApiAxiosParamCreator(configuration).getAllGroups(page, size, name, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
            const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
            return axios.request(axiosRequestArgs);
            };
            },
            /**
            * 
                * @summary Get group persons
                * @param {number} page Current page
                * @param {number} size Page size
                * @param {number} groupId Group id
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
            async getAllPersonsByGroupId(page: number, size: number, groupId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Model1groups1groupId1persons>> {
            const localVarAxiosArgs = await GroupApiAxiosParamCreator(configuration).getAllPersonsByGroupId(page, size, groupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
            const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
            return axios.request(axiosRequestArgs);
            };
            },
            /**
            * 
                * @summary Get group
                * @param {number} groupId Group id
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
            async getGroup(groupId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Group>> {
            const localVarAxiosArgs = await GroupApiAxiosParamCreator(configuration).getGroup(groupId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
            const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
            return axios.request(axiosRequestArgs);
            };
            },
            /**
            * 
                * @summary Update group
                * @param {number} groupId Group id
                * @param {Model1groups1groupId} body Metadata
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
            async updateGroup(groupId: number, body: Model1groups1groupId, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await GroupApiAxiosParamCreator(configuration).updateGroup(groupId, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
            const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
            return axios.request(axiosRequestArgs);
            };
            },
            /**
            * 
                * @summary Add/remove persons to group
                * @param {number} groupId Group id
                * @param {UpdateGroup} updateGroup Person ids to add or remove
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
            async updatePersonsInGroup(groupId: number, updateGroup: UpdateGroup, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await GroupApiAxiosParamCreator(configuration).updatePersonsInGroup(groupId, updateGroup, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
            const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
            return axios.request(axiosRequestArgs);
            };
            },
        }
        };

        /**
        * GroupApi - factory interface
        * @export
        */
        export const GroupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
        return {
            /**
            * 
                * @summary Create group
                * @param {GroupToCreate} groupToCreate Group to create
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
        createGroup(groupToCreate: GroupToCreate, options?: any): AxiosPromise<Group> {
            return GroupApiFp(configuration).createGroup(groupToCreate, options).then((request) => request(axios, basePath));
            },
            /**
            * 
                * @summary Delete group
                * @param {number} groupId Group id
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
        deleteGroup(groupId: number, options?: any): AxiosPromise<void> {
            return GroupApiFp(configuration).deleteGroup(groupId, options).then((request) => request(axios, basePath));
            },
            /**
            * 
                * @summary Get groups
                * @param {number} page Current page
                * @param {number} size Page size
                * @param {string} [name] Group name keywords
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
        getAllGroups(page: number, size: number, name?: string, options?: any): AxiosPromise<GroupPage> {
            return GroupApiFp(configuration).getAllGroups(page, size, name, options).then((request) => request(axios, basePath));
            },
            /**
            * 
                * @summary Get group persons
                * @param {number} page Current page
                * @param {number} size Page size
                * @param {number} groupId Group id
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
        getAllPersonsByGroupId(page: number, size: number, groupId: number, options?: any): AxiosPromise<Model1groups1groupId1persons> {
            return GroupApiFp(configuration).getAllPersonsByGroupId(page, size, groupId, options).then((request) => request(axios, basePath));
            },
            /**
            * 
                * @summary Get group
                * @param {number} groupId Group id
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
        getGroup(groupId: number, options?: any): AxiosPromise<Group> {
            return GroupApiFp(configuration).getGroup(groupId, options).then((request) => request(axios, basePath));
            },
            /**
            * 
                * @summary Update group
                * @param {number} groupId Group id
                * @param {Model1groups1groupId} body Metadata
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
        updateGroup(groupId: number, body: Model1groups1groupId, options?: any): AxiosPromise<void> {
            return GroupApiFp(configuration).updateGroup(groupId, body, options).then((request) => request(axios, basePath));
            },
            /**
            * 
                * @summary Add/remove persons to group
                * @param {number} groupId Group id
                * @param {UpdateGroup} updateGroup Person ids to add or remove
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
        updatePersonsInGroup(groupId: number, updateGroup: UpdateGroup, options?: any): AxiosPromise<void> {
            return GroupApiFp(configuration).updatePersonsInGroup(groupId, updateGroup, options).then((request) => request(axios, basePath));
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
                    * @param {GroupToCreate} groupToCreate Group to create
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof GroupApi
            */
                protected createGroupGen(groupToCreate: GroupToCreate, options?: any) {
                return GroupApiFp(this.configuration).createGroup(groupToCreate, options).then((request) => request(this.axios, this.basePath));
                }

            /**
            * 
                * @summary Delete group
                    * @param {number} groupId Group id
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof GroupApi
            */
                protected deleteGroupGen(groupId: number, options?: any) {
                return GroupApiFp(this.configuration).deleteGroup(groupId, options).then((request) => request(this.axios, this.basePath));
                }

            /**
            * 
                * @summary Get groups
                    * @param {number} page Current page
                    * @param {number} size Page size
                    * @param {string} [name] Group name keywords
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof GroupApi
            */
                protected getAllGroupsGen(page: number, size: number, name?: string, options?: any) {
                return GroupApiFp(this.configuration).getAllGroups(page, size, name, options).then((request) => request(this.axios, this.basePath));
                }

            /**
            * 
                * @summary Get group persons
                    * @param {number} page Current page
                    * @param {number} size Page size
                    * @param {number} groupId Group id
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof GroupApi
            */
                protected getAllPersonsByGroupIdGen(page: number, size: number, groupId: number, options?: any) {
                return GroupApiFp(this.configuration).getAllPersonsByGroupId(page, size, groupId, options).then((request) => request(this.axios, this.basePath));
                }

            /**
            * 
                * @summary Get group
                    * @param {number} groupId Group id
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof GroupApi
            */
                protected getGroupGen(groupId: number, options?: any) {
                return GroupApiFp(this.configuration).getGroup(groupId, options).then((request) => request(this.axios, this.basePath));
                }

            /**
            * 
                * @summary Update group
                    * @param {number} groupId Group id
                    * @param {Model1groups1groupId} body Metadata
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof GroupApi
            */
                protected updateGroupGen(groupId: number, body: Model1groups1groupId, options?: any) {
                return GroupApiFp(this.configuration).updateGroup(groupId, body, options).then((request) => request(this.axios, this.basePath));
                }

            /**
            * 
                * @summary Add/remove persons to group
                    * @param {number} groupId Group id
                    * @param {UpdateGroup} updateGroup Person ids to add or remove
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof GroupApi
            */
                protected updatePersonsInGroupGen(groupId: number, updateGroup: UpdateGroup, options?: any) {
                return GroupApiFp(this.configuration).updatePersonsInGroup(groupId, updateGroup, options).then((request) => request(this.axios, this.basePath));
                }
        }
