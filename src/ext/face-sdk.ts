import {BASE_PATH} from "../base.js";
import {Configuration} from "../configuration.js";
import globalAxios, {AxiosInstance} from "axios";
import {MatchingApi} from "./matching-api.js";
import {GroupApi} from "./group-api";
import {PersonApi} from "./person-api";
import {SearchApi} from "./search-api";
import { DiagnosticsApi } from "./diagnostics-api.js";
import { Liveness20Api } from "./liveness20-api.js";

export class FaceSdk {
    matchingApi: MatchingApi;
    groupApi: GroupApi;
    personApi: PersonApi;
    searchApi: SearchApi;
    diagnosticsApi: DiagnosticsApi;
    liveness20Api: Liveness20Api;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected axios: AxiosInstance = globalAxios) {
        this.matchingApi = new MatchingApi(configuration, basePath, axios);
        this.groupApi = new GroupApi(configuration, basePath, axios);
        this.personApi = new PersonApi(configuration, basePath, axios);
        this.searchApi = new SearchApi(configuration, basePath, axios);
        this.diagnosticsApi = new DiagnosticsApi(configuration, basePath, axios);
        this.liveness20Api = new Liveness20Api(configuration, basePath, axios);
    }
}
