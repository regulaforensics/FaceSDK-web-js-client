import {SearchApi as GenSearchApi} from "../api/search-api";
import * as converter from "base64-arraybuffer";
import {SearchRequest, SearchResult} from "../models";
import {AxiosRequestConfig, AxiosInstance} from "axios";
import {Configuration} from "../configuration.js";

export class SearchApi {
    private superClass: GenSearchApi;
    constructor(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
        this.superClass = new GenSearchApi(configuration, basePath, axios);
    }
    async search(searchRequest: SearchRequest, xRequestID?: string, options?: AxiosRequestConfig): Promise<SearchResult> {
        if (searchRequest?.image?.content && typeof searchRequest.image.content !== "string") {
            searchRequest.image.content = converter.encode(searchRequest.image.content)
        }
        const response = await this.superClass.search(searchRequest, xRequestID, options);
        return response.data;
    }
}