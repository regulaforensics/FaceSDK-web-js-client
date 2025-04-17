import { MatchApi as GenMatchApi } from '../api/match-api';
import { MatchRequest, DetectRequest, ImageSource, MatchResponse } from '../models';
import { AxiosRequestConfig, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import * as converter from 'base64-arraybuffer';
import { TDetectResponse } from './extra-types/match-detection-types';

export class MatchApi {
    private superClass: GenMatchApi;
    constructor(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
        this.superClass = new GenMatchApi(configuration, basePath, axios);
    }

    async match(
        compareRequest: MatchRequest,
        xRequestID?: string,
        options?: AxiosRequestConfig,
    ): Promise<MatchResponse> {
        for (const image of compareRequest.images) {
            if (!image.type) {
                image.type = ImageSource.LIVE;
            }
            if (typeof image.data !== 'string') {
                image.data = converter.encode(image.data);
            }
        }
        const response = await this.superClass.match(compareRequest, xRequestID, options);
        return response.data;
    }
    async detect(
        detectRequest: DetectRequest,
        xRequestID?: string,
        options?: AxiosRequestConfig,
    ): Promise<TDetectResponse> {
        if (detectRequest.image && typeof detectRequest.image !== 'string') {
            detectRequest.image = converter.encode(detectRequest.image);
        }

        const response = await this.superClass.detect(detectRequest, xRequestID, options);
        return response.data as TDetectResponse;
    }
}
