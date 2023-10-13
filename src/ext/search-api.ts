import {SearchApi as GenSearchApi} from "../api/search-api";
import * as converter from "base64-arraybuffer";
import {SearchRequest, SearchResult} from "../models";
import {AxiosRequestConfig} from "axios";


export class SearchApi extends GenSearchApi {
    search(searchRequest: SearchRequest, xRequestID?: string, options?: AxiosRequestConfig): any {
        if (searchRequest?.image?.content && typeof searchRequest.image.content !== "string") {
            searchRequest.image.content = converter.encode(searchRequest.image.content)
        }
        return super.search(searchRequest, xRequestID, options).then(r => r.data);
    }
    async searchT(searchRequest: SearchRequest, xRequestID?: string, options?: AxiosRequestConfig): Promise<SearchResult> {
        if (searchRequest?.image?.content && typeof searchRequest.image.content !== "string") {
            searchRequest.image.content = converter.encode(searchRequest.image.content)
        }
        const response = await super.search(searchRequest, xRequestID, options);
        return response.data;
    }
}