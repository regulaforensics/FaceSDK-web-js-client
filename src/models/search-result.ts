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


import { SearchPerson } from './search-person';

/**
 * 
 * @export
 * @interface SearchResult
 */
export interface SearchResult {
    /**
     * Result code. It is returned only with response 200.
     * @type {number}
     * @memberof SearchResult
     */
    'code'?: number;
    /**
     * Array of Person images. It is returned only with response 200.
     * @type {Array<SearchPerson>}
     * @memberof SearchResult
     */
    'persons'?: Array<SearchPerson>;
    /**
     * Person ID. The list of persons is sorted by decreasing ID value.
     * @type {string}
     * @memberof SearchResult
     */
    'id'?: string | null;
    /**
     * Person creation date.
     * @type {string}
     * @memberof SearchResult
     */
    'createdAt'?: string | null;
    /**
     * Person update date.
     * @type {string}
     * @memberof SearchResult
     */
    'updatedAt'?: string | null;
    /**
     * List of groups this person belongs to.
     * @type {Array<string>}
     * @memberof SearchResult
     */
    'groups'?: Array<string> | null;
    /**
     * Person name.
     * @type {string}
     * @memberof SearchResult
     */
    'name'?: string | null;
    /**
     * A free-form object containing person\'s extended attributes. Available when a person is being created
     * @type {{ [key: string]: object; }}
     * @memberof SearchResult
     */
    'metadata'?: { [key: string]: object; } | null;
}

