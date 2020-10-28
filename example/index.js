import {
  Sdk,
  ImageSource
} from '@regulaforensics/face-recognition-webclient/esm';
import fs from "fs";

(async () => {
  let apiBasePath = process.env.API_BASE_PATH || "http://localhost:41101"

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
  const detectResults = detectResponse.results

  console.log("                         Detect Results                          ")
  console.log("-----------------------------------------------------------------")
  console.log(`detectorType: ${detectResults.detectorType}`)
  console.log(`landmarkType: ${detectResults.landmarksType}`)
  for (const i of detectResults.detections) {
    console.log(`landmarks: ${JSON.stringify(i.landmarks)}`)
    console.log(`roi: ${JSON.stringify(i.roi)}`)
  }
  console.log("-----------------------------------------------------------------")
})();

