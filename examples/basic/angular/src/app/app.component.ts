import { Component } from '@angular/core';
import { FaceSdk } from '@regulaforensics/facesdk-webclient';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private faceSdk: FaceSdk;
    resultObject: any;
    constructor() {
        this.faceSdk = new FaceSdk(undefined, 'https://faceapi.regulaforensics.com');
    }
    title = 'Face Sdk Web Client Example';

    async diagnostic() {
        const result = await this.faceSdk.diagnosticsApi.readiness();
        this.resultObject = result;
    }
}
