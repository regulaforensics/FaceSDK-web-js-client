import {BASE_PATH} from "../base.js";
import {Configuration} from "../configuration.js";
import globalAxios, {AxiosInstance} from "axios";
import {MatchingApi} from "./matching-api.js";
import {LivenessApi} from "./liveness-api.js";

export class Sdk {
    matchingApi: MatchingApi;
    livenessApi: LivenessApi;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected axios: AxiosInstance = globalAxios) {
        this.matchingApi = new MatchingApi(configuration, basePath, axios)
        this.livenessApi = new LivenessApi(configuration, basePath, axios)
    }
}