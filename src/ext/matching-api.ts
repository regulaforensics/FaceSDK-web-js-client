import {MatchingApi as GenMatchingApi} from "../api/matching-api.js";
import {MatchRequest, DetectRequest, ImageSource, MatchResponse, DetectResponse} from "../models/index.js";
import { AxiosRequestConfig } from 'axios';
// @ts-ignore
import * as converter from "base64-arraybuffer";

export class MatchingApi extends GenMatchingApi {

  match(compareRequest: MatchRequest, xRequestID: string, options?: any): any {
    for (const image of compareRequest.images) {
      if (!image.type) {
        image.type = ImageSource.LIVE
      }
      if (typeof image.data !== "string") {
        image.data = converter.encode(image.data)
      }
    }

    return super.match(compareRequest, xRequestID, options).then(r => r.data);
  }

  async matchT(compareRequest: MatchRequest, xRequestID: string, options?: AxiosRequestConfig ): Promise<MatchResponse> {
    for (const image of compareRequest.images) {
      if (!image.type) {
        image.type = ImageSource.LIVE
      }
      if (typeof image.data !== "string") {
        image.data = converter.encode(image.data)
      }
    }
    const response = await super.match(compareRequest, xRequestID, options);
    return response.data;
  }

  detect(detectRequest: DetectRequest, xRequestID? : string, options?: any): any {
    if (detectRequest.image && typeof detectRequest.image !== "string") {
      detectRequest.image = converter.encode(detectRequest.image)
    }
    return super.detect(detectRequest, xRequestID, options).then(r => r.data)
  }

  async detectT(detectRequest: DetectRequest, xRequestID?: string, options?: AxiosRequestConfig): Promise<DetectResponse> {
    if (detectRequest.image && typeof detectRequest.image !== "string") {
      detectRequest.image = converter.encode(detectRequest.image);
    }
    
    const response = await super.detect(detectRequest, xRequestID, options);
    return response.data;
  }
}
