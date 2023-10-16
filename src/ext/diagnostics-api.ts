import { DiagnosticsApi as GenDiagnosticsApi } from "../api/diagnostics-api";
import {AxiosRequestConfig, AxiosInstance} from "axios";
import {Configuration} from "../configuration.js";

export class DiagnosticsApi {
    private superClass: GenDiagnosticsApi;
    constructor(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
        this.superClass = new GenDiagnosticsApi(configuration, basePath, axios);
    }
    async readiness(xRequestID?: string, options?: AxiosRequestConfig): Promise<Record<string, unknown>> {
        const response  = await this.superClass.readiness(xRequestID, options);
        return response.data;
    }
}