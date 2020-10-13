import {LivenessApi as GenLivenessApi} from "../api/liveness-api.js";
import {DepthLiveness, ImageLiveness, LivenessResultItem} from "../models/index.js";

// @ts-ignore
import converter from "base64-arraybuffer";

export class LivenessApi extends GenLivenessApi {
    checkVideoLiveness(body: ArrayBuffer, options?: any): Promise<LivenessResultItem> {
        return super.checkVideoLivenessGen(new Uint8Array(body), options).then(r => r.data)
    }

    checkDepthLiveness(depthLiveness: DepthLiveness, options?: any): Promise<Array<LivenessResultItem>> {
        for (const i of depthLiveness.images) {
            if (typeof i.dataScene !== "string") {
                i.dataScene = converter.encode(i.dataScene)
            }
            if (typeof i.dataDepth !== "string") {
                i.dataDepth = converter.encode(i.dataDepth)
            }
        }
        return super.checkDepthLivenessGen(depthLiveness, options).then(r => r.data)
    }

    checkImageLiveness(imageLiveness: ImageLiveness, options?: any): Promise<Array<LivenessResultItem>> {
        for (const i of imageLiveness.images) {
            if (typeof i.data !== "string") {
                i.data = converter.encode(i.data)
            }
        }
        return super.checkImageLivenessGen(imageLiveness, options).then(r => r.data)
    }
}