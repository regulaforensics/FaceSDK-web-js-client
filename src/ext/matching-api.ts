import {MatchingApi as GenMatchingApi} from "../api/matching-api.js";
import {MatchRequest, MatchResponse, DetectRequest, DetectResponse, ImageSource} from "../models/index.js";

// @ts-ignore
import * as converter from "base64-arraybuffer";

export class MatchingApi extends GenMatchingApi {

  match(compareRequest: MatchRequest, options?: any): Promise<MatchResponse> {
    for (const image of compareRequest.images) {
      if (!image.type) {
        image.type = ImageSource.LIVE
      }
      if (typeof image.data !== "string") {
        image.data = converter.encode(image.data)
      }
    }
    return super.matchGen(compareRequest, options).then(r => r.data);
  }

  // deprecated, use match()
  compare(compareRequest: MatchRequest, options?: any): Promise<MatchResponse> {
    return this.match(compareRequest, options)
  }

  detect(detectRequest: DetectRequest, options?: any): Promise<DetectResponse> {
    if (detectRequest.image && typeof detectRequest.image !== "string") {
      detectRequest.image = converter.encode(detectRequest.image)
    }
    return super.detectGen(detectRequest, options).then(r => r.data)
  }
}
