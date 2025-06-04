import { FaceSdk, ImageSource } from '@regulaforensics/facesdk-webclient';
import fs from 'fs';
import qs from 'qs';
import axios from 'axios';

const GATEWAY_BASE_URL = 'http://localhost:8080';

async function get_authorization_token() {
    let data = qs.stringify({
        grant_type: 'password',
        username: 'testuser1',
        password: 't3stP@ss',
        client_id: 'account',
        scope: 'openid',
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${GATEWAY_BASE_URL}/realms/regula/protocol/openid-connect/token`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data,
    };
    return axios
        .request(config)
        .then((response) => {
            return response.data['access_token'];
        })
        .catch((error) => {
            console.log(error);
        });
}

(async () => {
    let apiBasePath = process.env.API_BASE_PATH || 'http://localhost:4333';

    const face1 = fs.readFileSync('face1.jpg').buffer;
    const face2 = fs.readFileSync('face2.jpg').buffer;
    const token = await get_authorization_token();
    const sdk = new FaceSdk({ basePath: apiBasePath, baseOptions: { headers: { Authorization: `Bearer ${token}` } } });

    const matchResponse = await sdk.matchApi.match({
        tag: '1',
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
    for (const result of matchResponse.results) {
        console.log(`pair(${result.firstIndex},${result.secondIndex})   similarity: ${result.similarity}`);
    }
    console.log('-----------------------------------------------------------------');

    const detectResponse = await sdk.matchApi.detect({
        tag: '1',
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
