import {MatchingApi as GenMatchingApi} from "../api/matching-api.js";
import {MatchRequest, DetectRequest, ImageSource, MatchResponse, DetectResponse} from "../models";
import { AxiosRequestConfig, AxiosInstance } from "axios";
import {Configuration} from "../configuration.js";
// @ts-ignore
import * as converter from "base64-arraybuffer";

export class MatchingApi {
  private superClass: GenMatchingApi;
  constructor(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    this.superClass = new GenMatchingApi(configuration, basePath, axios);
  }

  async match(compareRequest: MatchRequest, xRequestID: string, options?: AxiosRequestConfig ): Promise<MatchResponse> {
    for (const image of compareRequest.images) {
      if (!image.type) {
        image.type = ImageSource.LIVE
      }
      if (typeof image.data !== "string") {
        image.data = converter.encode(image.data)
      }
    }
    const response = await this.superClass.match(compareRequest, xRequestID, options);
    return response.data;
  }
  async detect(detectRequest: DetectRequest, xRequestID?: string, options?: AxiosRequestConfig): Promise<DetectResponse> {
    if (detectRequest.image && typeof detectRequest.image !== "string") {
      detectRequest.image = converter.encode(detectRequest.image);
    }
    
    const response = await this.superClass.detect(detectRequest, xRequestID, options);
    return response.data;
  }
}
