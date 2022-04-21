import {
    FaceSdk,
    ImageSource
} from '@regulaforensics/facesdk-webclient/esm';
import fs from "fs";

(async () => {
    let apiBasePath = process.env.API_BASE_PATH || "https://test-faceapi.regulaforensics.com"

    const face1 = fs.readFileSync('../face1.jpg').buffer
    const face2 = fs.readFileSync('../face2.jpg').buffer

    const sdk = new FaceSdk({basePath: apiBasePath})

    const matchingResponse = await sdk.matchingApi.match({
        tag: "1",
        images: [
            {type: ImageSource.LIVE, data: face1},
            {type: ImageSource.DOCUMENT_RFID, data: face1},
            {data: face2},
        ],
        thumbnails: true
    })

    console.log("-----------------------------------------------------------------")
    console.log("                         Compare Results                         ")
    console.log("-----------------------------------------------------------------")
    for (const result of matchingResponse.results) {
        console.log(`pair(${result.firstIndex},${result.secondIndex})   similarity: ${result.similarity}`)
    }
    console.log("-----------------------------------------------------------------")

    const config = JSON.parse(fs.readFileSync('../quality-config.json', 'utf-8').toString())

    const detectRequest = {
        tag: 1,
        image: face1,
        onlyCentralFace: false,
        thumbnails: true,
        quality:
            {
                align:
                    {
                        type: 1,
                        pad: [128, 128, 128]
                    },
                background: [128, 128, 128],
                config: config
            }
    }
    const detectResponse = await sdk.matchingApi.detect(detectRequest)
    const detectResults = detectResponse.results

    console.log("                         Detect Results                          ")
    console.log("-----------------------------------------------------------------")
    console.log(`detectorType: ${detectResults.detectorType}`)
    console.log(`landmarkType: ${detectResults.landmarksType}`)
    for (const i of detectResults.detections) {
        console.log(`landmarks: ${JSON.stringify(i.landmarks)}`)
        console.log(`roi: ${JSON.stringify(i.roi)}`)
        console.log(`quality details: ${JSON.stringify(i.quality.details)}`)
        fs.writeFileSync("../croppedFace.png", i.crop, 'base64')
    }
    console.log("-----------------------------------------------------------------")
})();
