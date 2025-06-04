import { HealthcheckApi as GenHealthcheckApi } from '../api/healthcheck-api';
import { DeviceInfo } from '../models';
import { AxiosRequestConfig, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';

export class HealthcheckApi {
    private superClass: GenHealthcheckApi;
    constructor(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
        this.superClass = new GenHealthcheckApi(configuration, basePath, axios);
    }
    async healthz(xRequestID?: string, options?: AxiosRequestConfig): Promise<DeviceInfo> {
        const response = await this.superClass.healthz(xRequestID, options);
        return response.data;
    }
    async readyz(xRequestID?: string, options?: AxiosRequestConfig): Promise<void> {
        const response = await this.superClass.readyz(xRequestID, options);
        return response.data;
    }
}
