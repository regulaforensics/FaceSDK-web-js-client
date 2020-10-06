import {
  Sdk,
  ImageSource
} from '@regulaforensics/face-recognition-webclient/esm';
import fs from "fs";

(async () => {
  let apiBasePath = process.env.API_BASE_PATH || "http://localhost:41101/api"

  const face1 = fs.readFileSync('face1.jpg').buffer
  const face2 = fs.readFileSync('face2.jpg').buffer

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
    console.log(`landmarks: ${i.landmarks}`)
    console.log(`roi: ${i.roi}`)
  }
  console.log("-----------------------------------------------------------------")
})();

