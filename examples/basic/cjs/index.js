const { FaceSdk, ImageSource } = require('@regulaforensics/facesdk-webclient');
const fs = require('fs');

(async () => {
    let apiBasePath = process.env.API_BASE_PATH || 'https://faceapi.regulaforensics.com';

    const face1 = fs.readFileSync('../face1.jpg').buffer;
    const face2 = fs.readFileSync('../face2.jpg').buffer;

    const sdk = new FaceSdk({ basePath: apiBasePath });

    const matchingResponse = await sdk.matchApi.match({
        images: [
            { type: ImageSource.LIVE, data: face1 },
            { type: ImageSource.DOCUMENT_RFID, data: face1 },
            { data: face2 },
        ],
        thumbnails: true,
    });

    console.log('-----------------------------------------------------------------');
    console.log('                         Compare Results                         ');
    console.log('-----------------------------------------------------------------');
    for (const result of matchingResponse.results) {
        console.log(`pair(${result.firstIndex},${result.secondIndex})   similarity: ${result.similarity}`);
    }
    console.log('-----------------------------------------------------------------');

    const detectResponse = await sdk.matchApi.detect({
        image: face1,
        onlyCentralFace: false,
        thumbnails: true,
        attributes: true,
    });
    const detectResults = detectResponse.results;

    console.log('                         Detect Results                          ');
    console.log('-----------------------------------------------------------------');
    console.log(`detectorType: ${detectResults.detectorType}`);
    console.log(`landmarkType: ${detectResults.landmarksType}`);
    for (const i of detectResults.detections) {
        console.log(`landmarks: ${JSON.stringify(i.landmarks)}`);
        console.log(`roi: ${JSON.stringify(i.roi)}`);
        console.log(`attributes: ${JSON.stringify(i.attributes)}`);
    }
    console.log('-----------------------------------------------------------------');
})();
