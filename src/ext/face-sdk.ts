import {BASE_PATH} from "../base.js";
import {Configuration} from "../configuration.js";
import globalAxios, {AxiosInstance} from "axios";
import {MatchingApi} from "./matching-api.js";
import {GroupApi} from "../api/group-api";
import {SearchApi} from "../api/search-api";
import {PersonApi} from "./person-api";

export class FaceSdk {
    matchingApi: MatchingApi;
    personApi: PersonApi;
    groupApi: GroupApi;
    searchApi: SearchApi;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected axios: AxiosInstance = globalAxios) {
        this.matchingApi = new MatchingApi(configuration, basePath, axios)
        this.personApi = new PersonApi(configuration, basePath, axios)
    }
}
