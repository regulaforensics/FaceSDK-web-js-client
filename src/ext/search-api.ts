import {SearchApi as GenSearchApi} from "../api/search-api";
import * as converter from "base64-arraybuffer";
import {SearchRequest} from "../models";
import {AxiosRequestConfig} from "axios";


export class SearchApi extends GenSearchApi {
    search(searchRequest: SearchRequest, options?: AxiosRequestConfig): any {
        if (searchRequest.image.content && typeof searchRequest.image.content !== "string") {
            searchRequest.image.content = converter.encode(searchRequest.image.content)
        }
        return super.search(searchRequest, options).then(r => r.data);
    }
}