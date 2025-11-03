import { BASE_PATH } from '../base';
import { Configuration } from '../configuration';
import globalAxios, { AxiosInstance } from 'axios';
import { MatchApi } from './match-api';
import { GroupApi } from './group-api';
import { PersonApi } from './person-api';
import { SearchApi } from './search-api';
import { Liveness20Api } from './liveness20-api';
import { HealthcheckApi } from './healthcheck-api';

export class FaceSdk {
    matchApi: MatchApi;
    groupApi: GroupApi;
    personApi: PersonApi;
    searchApi: SearchApi;
    livenessApi: Liveness20Api;
    healthcheckApi: HealthcheckApi;

    constructor(
        configuration?: Configuration,
        protected basePath: string = BASE_PATH,
        protected axios: AxiosInstance = globalAxios,
    ) {
        this.matchApi = new MatchApi(configuration, basePath, axios);
        this.groupApi = new GroupApi(configuration, basePath, axios);
        this.personApi = new PersonApi(configuration, basePath, axios);
        this.searchApi = new SearchApi(configuration, basePath, axios);
        this.livenessApi = new Liveness20Api(configuration, basePath, axios);
        this.healthcheckApi = new HealthcheckApi(configuration, basePath, axios);
    }
}
