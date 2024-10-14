import { BASE_PATH } from '../base';
import { Configuration, ConfigurationParameters } from '../configuration';
import globalAxios, { AxiosInstance } from 'axios';
import { MatchingApi } from './matching-api';
import { GroupApi } from './group-api';
import { PersonApi } from './person-api';
import { SearchApi } from './search-api';
import { DiagnosticsApi } from './diagnostics-api';
import { Liveness20Api } from './liveness20-api';

export class FaceSdk {
    matchingApi: MatchingApi;
    groupApi: GroupApi;
    personApi: PersonApi;
    searchApi: SearchApi;
    diagnosticsApi: DiagnosticsApi;
    livenessApi: Liveness20Api;

    constructor({
        configuration,
        basePath = BASE_PATH,
        axios = globalAxios,
    }: {
        configuration?: ConfigurationParameters;
        basePath?: string;
        axios?: AxiosInstance;
    }) {
        const config = configuration ? new Configuration(configuration) : undefined;

        this.matchingApi = new MatchingApi(config, basePath, axios);
        this.groupApi = new GroupApi(config, basePath, axios);
        this.personApi = new PersonApi(config, basePath, axios);
        this.searchApi = new SearchApi(config, basePath, axios);
        this.diagnosticsApi = new DiagnosticsApi(config, basePath, axios);
        this.livenessApi = new Liveness20Api(config, basePath, axios);
    }
}
