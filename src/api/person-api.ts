/* tslint:disable */
/* eslint-disable */
/**
 * Regula FaceSDK Web API
 * Regula FaceSDK Web API # Clients * [JavaScript](https://github.com/regulaforensics/FaceSDK-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/FaceSDK-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/FaceSDK-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/FaceSDK-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 4.1.0
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
import { GroupPage } from '../models';
// @ts-ignore
import { Image } from '../models';
// @ts-ignore
import { ImageFields } from '../models';
// @ts-ignore
import { ImagePage } from '../models';
// @ts-ignore
import { OperationLog } from '../models';
// @ts-ignore
import { Person } from '../models';
// @ts-ignore
import { PersonFields } from '../models';
// @ts-ignore
import { PersonsPage } from '../models';
/**
 * PersonApi - axios parameter creator
 * @export
 */
export const PersonApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add person image
         * @param {number} personId Person ID.
         * @param {ImageFields} imageFields Image to add.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addImageToPerson: async (personId: number, imageFields: ImageFields, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'personId' is not null or undefined
            assertParamExists('addImageToPerson', 'personId', personId)
            // verify required parameter 'imageFields' is not null or undefined
            assertParamExists('addImageToPerson', 'imageFields', imageFields)
            const localVarPath = `/api/persons/{person_id}/images`
                .replace(`{${"person_id"}}`, encodeURIComponent(String(personId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(imageFields, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create person
         * @param {PersonFields} personFields 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPerson: async (personFields: PersonFields, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'personFields' is not null or undefined
            assertParamExists('createPerson', 'personFields', personFields)
            const localVarPath = `/api/persons`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(personFields, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete image of person
         * @param {number} imageId Image ID.
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteImageOfPerson: async (imageId: number, personId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'imageId' is not null or undefined
            assertParamExists('deleteImageOfPerson', 'imageId', imageId)
            // verify required parameter 'personId' is not null or undefined
            assertParamExists('deleteImageOfPerson', 'personId', personId)
            const localVarPath = `/api/persons/{person_id}/images/{image_id}`
                .replace(`{${"image_id"}}`, encodeURIComponent(String(imageId)))
                .replace(`{${"person_id"}}`, encodeURIComponent(String(personId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Delete person
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePerson: async (personId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'personId' is not null or undefined
            assertParamExists('deletePerson', 'personId', personId)
            const localVarPath = `/api/persons/{person_id}`
                .replace(`{${"person_id"}}`, encodeURIComponent(String(personId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Get person groups
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllGroupsByPersonId: async (page: number, size: number, personId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            assertParamExists('getAllGroupsByPersonId', 'page', page)
            // verify required parameter 'size' is not null or undefined
            assertParamExists('getAllGroupsByPersonId', 'size', size)
            // verify required parameter 'personId' is not null or undefined
            assertParamExists('getAllGroupsByPersonId', 'personId', personId)
            const localVarPath = `/api/persons/{person_id}/groups`
                .replace(`{${"person_id"}}`, encodeURIComponent(String(personId)));
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
         * @summary Get person images
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllImagesByPersonId: async (page: number, size: number, personId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            assertParamExists('getAllImagesByPersonId', 'page', page)
            // verify required parameter 'size' is not null or undefined
            assertParamExists('getAllImagesByPersonId', 'size', size)
            // verify required parameter 'personId' is not null or undefined
            assertParamExists('getAllImagesByPersonId', 'personId', personId)
            const localVarPath = `/api/persons/{person_id}/images`
                .replace(`{${"person_id"}}`, encodeURIComponent(String(personId)));
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
         * @summary Get persons
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPersons: async (page: number, size: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            assertParamExists('getAllPersons', 'page', page)
            // verify required parameter 'size' is not null or undefined
            assertParamExists('getAllPersons', 'size', size)
            const localVarPath = `/api/persons`;
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
         * @summary Get person image by id
         * @param {number} imageId Image ID.
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImageOfPerson: async (imageId: number, personId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'imageId' is not null or undefined
            assertParamExists('getImageOfPerson', 'imageId', imageId)
            // verify required parameter 'personId' is not null or undefined
            assertParamExists('getImageOfPerson', 'personId', personId)
            const localVarPath = `/api/persons/{person_id}/images/{image_id}`
                .replace(`{${"image_id"}}`, encodeURIComponent(String(imageId)))
                .replace(`{${"person_id"}}`, encodeURIComponent(String(personId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Get person
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPerson: async (personId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'personId' is not null or undefined
            assertParamExists('getPerson', 'personId', personId)
            const localVarPath = `/api/persons/{person_id}`
                .replace(`{${"person_id"}}`, encodeURIComponent(String(personId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Update person
         * @param {number} personId Person ID.
         * @param {PersonFields} personFields Request body for the Person to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePerson: async (personId: number, personFields: PersonFields, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'personId' is not null or undefined
            assertParamExists('updatePerson', 'personId', personId)
            // verify required parameter 'personFields' is not null or undefined
            assertParamExists('updatePerson', 'personFields', personFields)
            const localVarPath = `/api/persons/{person_id}`
                .replace(`{${"person_id"}}`, encodeURIComponent(String(personId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(personFields, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PersonApi - functional programming interface
 * @export
 */
export const PersonApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PersonApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add person image
         * @param {number} personId Person ID.
         * @param {ImageFields} imageFields Image to add.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addImageToPerson(personId: number, imageFields: ImageFields, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Image>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addImageToPerson(personId, imageFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create person
         * @param {PersonFields} personFields 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPerson(personFields: PersonFields, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Person>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPerson(personFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete image of person
         * @param {number} imageId Image ID.
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteImageOfPerson(imageId: number, personId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteImageOfPerson(imageId, personId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete person
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePerson(personId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePerson(personId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get person groups
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllGroupsByPersonId(page: number, size: number, personId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllGroupsByPersonId(page, size, personId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get person images
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllImagesByPersonId(page: number, size: number, personId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ImagePage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllImagesByPersonId(page, size, personId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get persons
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllPersons(page: number, size: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PersonsPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllPersons(page, size, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get person image by id
         * @param {number} imageId Image ID.
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getImageOfPerson(imageId: number, personId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getImageOfPerson(imageId, personId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get person
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPerson(personId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Person>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPerson(personId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update person
         * @param {number} personId Person ID.
         * @param {PersonFields} personFields Request body for the Person to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePerson(personId: number, personFields: PersonFields, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePerson(personId, personFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PersonApi - factory interface
 * @export
 */
export const PersonApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PersonApiFp(configuration)
    return {
        /**
         * 
         * @summary Add person image
         * @param {number} personId Person ID.
         * @param {ImageFields} imageFields Image to add.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addImageToPerson(personId: number, imageFields: ImageFields, options?: any): AxiosPromise<Image> {
            return localVarFp.addImageToPerson(personId, imageFields, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create person
         * @param {PersonFields} personFields 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPerson(personFields: PersonFields, options?: any): AxiosPromise<Person> {
            return localVarFp.createPerson(personFields, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete image of person
         * @param {number} imageId Image ID.
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteImageOfPerson(imageId: number, personId: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteImageOfPerson(imageId, personId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete person
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePerson(personId: number, options?: any): AxiosPromise<void> {
            return localVarFp.deletePerson(personId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get person groups
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllGroupsByPersonId(page: number, size: number, personId: number, options?: any): AxiosPromise<GroupPage> {
            return localVarFp.getAllGroupsByPersonId(page, size, personId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get person images
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllImagesByPersonId(page: number, size: number, personId: number, options?: any): AxiosPromise<ImagePage> {
            return localVarFp.getAllImagesByPersonId(page, size, personId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get persons
         * @param {number} page The page number to get a list of persons or groups.
         * @param {number} size The page size with a list of persons or groups, items.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPersons(page: number, size: number, options?: any): AxiosPromise<PersonsPage> {
            return localVarFp.getAllPersons(page, size, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get person image by id
         * @param {number} imageId Image ID.
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getImageOfPerson(imageId: number, personId: number, options?: any): AxiosPromise<any> {
            return localVarFp.getImageOfPerson(imageId, personId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get person
         * @param {number} personId Person ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPerson(personId: number, options?: any): AxiosPromise<Person> {
            return localVarFp.getPerson(personId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update person
         * @param {number} personId Person ID.
         * @param {PersonFields} personFields Request body for the Person to update.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePerson(personId: number, personFields: PersonFields, options?: any): AxiosPromise<void> {
            return localVarFp.updatePerson(personId, personFields, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PersonApi - object-oriented interface
 * @export
 * @class PersonApi
 * @extends {BaseAPI}
 */
export class PersonApi extends BaseAPI {
    /**
     * 
     * @summary Add person image
     * @param {number} personId Person ID.
     * @param {ImageFields} imageFields Image to add.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonApi
     */
    public addImageToPerson(personId: number, imageFields: ImageFields, options?: AxiosRequestConfig) {
        return PersonApiFp(this.configuration).addImageToPerson(personId, imageFields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create person
     * @param {PersonFields} personFields 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonApi
     */
    public createPerson(personFields: PersonFields, options?: AxiosRequestConfig) {
        return PersonApiFp(this.configuration).createPerson(personFields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete image of person
     * @param {number} imageId Image ID.
     * @param {number} personId Person ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonApi
     */
    public deleteImageOfPerson(imageId: number, personId: number, options?: AxiosRequestConfig) {
        return PersonApiFp(this.configuration).deleteImageOfPerson(imageId, personId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete person
     * @param {number} personId Person ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonApi
     */
    public deletePerson(personId: number, options?: AxiosRequestConfig) {
        return PersonApiFp(this.configuration).deletePerson(personId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get person groups
     * @param {number} page The page number to get a list of persons or groups.
     * @param {number} size The page size with a list of persons or groups, items.
     * @param {number} personId Person ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonApi
     */
    public getAllGroupsByPersonId(page: number, size: number, personId: number, options?: AxiosRequestConfig) {
        return PersonApiFp(this.configuration).getAllGroupsByPersonId(page, size, personId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get person images
     * @param {number} page The page number to get a list of persons or groups.
     * @param {number} size The page size with a list of persons or groups, items.
     * @param {number} personId Person ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonApi
     */
    public getAllImagesByPersonId(page: number, size: number, personId: number, options?: AxiosRequestConfig) {
        return PersonApiFp(this.configuration).getAllImagesByPersonId(page, size, personId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get persons
     * @param {number} page The page number to get a list of persons or groups.
     * @param {number} size The page size with a list of persons or groups, items.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonApi
     */
    public getAllPersons(page: number, size: number, options?: AxiosRequestConfig) {
        return PersonApiFp(this.configuration).getAllPersons(page, size, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get person image by id
     * @param {number} imageId Image ID.
     * @param {number} personId Person ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonApi
     */
    public getImageOfPerson(imageId: number, personId: number, options?: AxiosRequestConfig) {
        return PersonApiFp(this.configuration).getImageOfPerson(imageId, personId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get person
     * @param {number} personId Person ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonApi
     */
    public getPerson(personId: number, options?: AxiosRequestConfig) {
        return PersonApiFp(this.configuration).getPerson(personId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update person
     * @param {number} personId Person ID.
     * @param {PersonFields} personFields Request body for the Person to update.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonApi
     */
    public updatePerson(personId: number, personFields: PersonFields, options?: AxiosRequestConfig) {
        return PersonApiFp(this.configuration).updatePerson(personId, personFields, options).then((request) => request(this.axios, this.basePath));
    }
}
