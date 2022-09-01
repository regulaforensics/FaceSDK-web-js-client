import {MatchingApi as GenMatchingApi} from "../api/matching-api.js";
import {MatchRequest, DetectRequest, ImageSource} from "../models/index.js";

// @ts-ignore
import * as converter from "base64-arraybuffer";

export class MatchingApi extends GenMatchingApi {

  match(compareRequest: MatchRequest, options?: any): any {
    for (const image of compareRequest.images) {
      if (!image.type) {
        image.type = ImageSource.LIVE
      }
      if (typeof image.data !== "string") {
        image.data = converter.encode(image.data)
      }
    }

    return super.match(compareRequest, options).then(r => r.data);
  }

  detect(detectRequest: DetectRequest, options?: any): any {
    if (detectRequest.image && typeof detectRequest.image !== "string") {
      detectRequest.image = converter.encode(detectRequest.image)
    }
    return super.detect(detectRequest, options).then(r => r.data)
  }
}
