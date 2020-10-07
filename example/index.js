import {
  Sdk,
  ImageSource
} from '@regulaforensics/face-recognition-webclient/esm';
import fs from "fs";

(async () => {
  let apiBasePath = process.env.API_BASE_PATH || "http://localhost:41101/api"

  const face1 = fs.readFileSync('face1.jpg').buffer
  const face2 = fs.readFileSync('face2.jpg').buffer
  const realVideo = fs.readFileSync('real_video_1.mp4')
  const realFrame = fs.readFileSync('liveness_real_frame_1.jpg').buffer
  const realDepth = fs.readFileSync('liveness_real_depth_1.png').buffer
  const realImage = fs.readFileSync('liveness_real_image_1.png').buffer

  const sdk = new Sdk({basePath: apiBasePath})

  const compareResponse = await sdk.matchingApi.compare({
    images: [
      {type: ImageSource.LIVE, data: face1, index: 1},
      {type: ImageSource.DOCUMENT_RFID, data: face1, index: 2},
      {data: face2, index: 3},
    ]
  })

  console.log("-----------------------------------------------------------------")
  console.log("                         Compare Results                         ")
  console.log("-----------------------------------------------------------------")
  for (const result of compareResponse.results) {
    console.log(`pair(${result.firstIndex},${result.secondIndex})   similarity: ${result.similarity}`)
  }
  console.log("-----------------------------------------------------------------")

  const detectResponse = await sdk.matchingApi.detect({
    image: face1,
    only_central_face: false
  })

  console.log("                         Detect Results                          ")
  console.log("-----------------------------------------------------------------")
  console.log(`detectorType: ${detectResponse.detectorType}`)
  console.log(`landmarkType: ${detectResponse.landmarksType}`)
  for (const i of detectResponse.detections) {
    console.log(`landmarks: ${JSON.stringify(i.landmarks)}`)
    console.log(`roi: ${JSON.stringify(i.roi)}`)
  }
  console.log("-----------------------------------------------------------------")

  const videoLivenessResult = await sdk.livenessApi.checkVideoLiveness(realVideo)

  console.log("                   Check video liveness result                   ")
  console.log("-----------------------------------------------------------------")
  console.log(`liveness_status: ${videoLivenessResult.livenessStatus}`)
  console.log("-----------------------------------------------------------------")

  const depthLivenessResult = await sdk.livenessApi.checkDepthLiveness({
    images: [
      {
        dataScene: realFrame, dataDepth: realDepth, depthScale: 0.001
      }
    ]
  })

  console.log("                   Check depth liveness result                   ")
  console.log("-----------------------------------------------------------------")
  for (const i of depthLivenessResult) {
    console.log(`index: ${i.index}`)
    console.log(`code: ${i.code}`)
    console.log(`liveness_status: ${i.livenessStatus}`)
  }
  console.log("-----------------------------------------------------------------")

  const imageLivenessResult = await sdk.livenessApi.checkImageLiveness({
    images: [
      {
        data: realImage
      }
    ]
  })

  console.log("                   Check image liveness result                   ")
  console.log("-----------------------------------------------------------------")
  for (const i of imageLivenessResult) {
    console.log(`index: ${i.index}`)
    console.log(`code: ${i.code}`)
    console.log(`liveness_status: ${i.livenessStatus}`)
  }
  console.log("-----------------------------------------------------------------")
})();

