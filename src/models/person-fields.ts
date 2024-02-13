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



/**
 * Person Request body: name and metadata.
 * @export
 * @interface PersonFields
 */
export interface PersonFields {
    /**
     * Person name.
     * @type {string}
     * @memberof PersonFields
     */
    'name'?: string;
    /**
     * A free-form object containing person\'s extended attributes.
     * @type {{ [key: string]: object; }}
     * @memberof PersonFields
     */
    'metadata'?: { [key: string]: object; };
    /**
     * Groups a person should be placed to. If no group is specified in request, a Default group is created and the person is placed to it.
     * @type {Array<string>}
     * @memberof PersonFields
     */
    'groups'?: Array<string>;
}

