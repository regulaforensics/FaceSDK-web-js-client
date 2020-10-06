import {MatchingApi as GenMatchingApi} from "../api/matching-api.js";
import {CompareRequest, CompareResponse, DetectRequest, DetectResponse, ImageSource} from "../models/index.js";

// @ts-ignore
import converter from "base64-arraybuffer";

export class MatchingApi extends GenMatchingApi {

  compare(compareRequest: CompareRequest, options?: any): Promise<CompareResponse> {
    for (const image of compareRequest.images) {
      if (!image.type) {
        image.type = ImageSource.LIVE
      }
      if (typeof image.data !== "string") {
        image.data = converter.encode(image.data)
      }
    }
    return super.compareGen(compareRequest, options).then(r => r.data);
  }

  detect(detectRequest: DetectRequest, options?: any): Promise<DetectResponse> {
    if (typeof  detectRequest.image !== "string") {
      detectRequest.image = converter.encode(detectRequest.image)
    }
    return super.detectGen(detectRequest, options).then(r => r.data)
  }
}
