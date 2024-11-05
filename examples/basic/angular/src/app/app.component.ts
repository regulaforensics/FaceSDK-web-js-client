import { Component } from '@angular/core';
import { FaceSdk } from '@regulaforensics/facesdk-webclient';
import { imageBase64 } from './resources';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private faceSdk: FaceSdk;
    resultObject: any;
    constructor() {
        this.faceSdk = new FaceSdk( {basePath: 'https://faceapi.regulaforensics.com'});
    }
    title = 'Face Sdk Web Client Example';

    async diagnostic() {
        const detectResponse = await this.faceSdk.matchingApi.detect({
            tag: '1',
            image: imageBase64,
            thumbnails: true,
        });
        const detectResults = detectResponse.results;
        if (detectResults) {
            detectResults.detections[0].crop = 'base64Image';
            detectResults.detections[0].thumbnail = 'base64Thumbnail';
            this.resultObject = detectResults;
        }
    }
}
