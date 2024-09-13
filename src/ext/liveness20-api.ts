import { Liveness20Api as GenLiveness20Api } from '../api/liveness20-api';
import { AxiosRequestConfig, AxiosInstance } from 'axios';
import { Configuration } from '../configuration.js';
import { TransactionInfo } from '../models';

export class Liveness20Api {
    private superClass: GenLiveness20Api;
    constructor(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
        this.superClass = new GenLiveness20Api(configuration, basePath, axios);
    }
    async getLivenessTransactionInfo(transactionId: string, options?: AxiosRequestConfig): Promise<TransactionInfo> {
        const response = await this.superClass.getLivenessTransactionInfo(transactionId, options);
        return response.data;
    }
}
