import {
  MatchingApi,
  ImageSource
} from '@regulaforensics/face-recognition-webclient/esm';
import fs from "fs";

(async () => {
  let apiBasePath = process.env.API_BASE_PATH || "http://localhost:5000/api"

  const face1 = fs.readFileSync('face1.jpg').buffer
  const face2 = fs.readFileSync('face2.jpg').buffer

  const api = new MatchingApi({basePath: apiBasePath});
  const response = await api.compare({
    images: [
      {type: ImageSource.LIVE, data: face1, index: 1},
      {type: ImageSource.DOCUMENT_RFID, data: face1, index: 2},
      {data: face2, index: 3},
    ]
  })


  console.log("                                                                 ")
  console.log("                         Compare Results                         ")
  console.log("-----------------------------------------------------------------")
  for (const result of response.results) {
    console.log(` pair(${result.firstIndex},${result.secondIndex})   similarity: ${result.similarity}`)
  }
  console.log("-----------------------------------------------------------------")

})();

