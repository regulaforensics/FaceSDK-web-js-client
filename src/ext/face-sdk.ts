import { BASE_PATH } from '../base';
import { Configuration } from '../configuration';
import globalAxios, { AxiosInstance } from 'axios';
import { MatchApi } from './match-api';
import { GroupApi } from './group-api';
import { PersonApi } from './person-api';
import { SearchApi } from './search-api';
import { DiagnosticsApi } from './diagnostics-api';
import { Liveness20Api } from './liveness20-api';

export class FaceSdk {
    matchApi: MatchApi;
    groupApi: GroupApi;
    personApi: PersonApi;
    searchApi: SearchApi;
    diagnosticsApi: DiagnosticsApi;
    livenessApi: Liveness20Api;

    constructor(
        configuration?: Configuration,
        protected basePath: string = BASE_PATH,
        protected axios: AxiosInstance = globalAxios,
    ) {
        this.matchApi = new MatchApi(configuration, basePath, axios);
        this.groupApi = new GroupApi(configuration, basePath, axios);
        this.personApi = new PersonApi(configuration, basePath, axios);
        this.searchApi = new SearchApi(configuration, basePath, axios);
        this.diagnosticsApi = new DiagnosticsApi(configuration, basePath, axios);
        this.livenessApi = new Liveness20Api(configuration, basePath, axios);
    }
    get matchingApi(): MatchApi {
        console.warn(
            'The matchingApi method is deprecated and will be removed in version 7.1. Please use matchApi instead.',
        );
        return this.matchApi;
    }
}
