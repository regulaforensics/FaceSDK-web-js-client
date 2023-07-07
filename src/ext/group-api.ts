import {GroupApi as GenGroupApi} from "../api/group-api";
import {GroupToCreate, UpdateGroup} from "../models";
import {AxiosRequestConfig} from "axios";

export class GroupApi extends GenGroupApi {
    createGroup(groupToCreate: GroupToCreate, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.createGroup(groupToCreate, xRequestID, options).then(r => r.data);
    }

    deleteGroup(groupId: string, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.deleteGroup(groupId, xRequestID, options).then(r => r.data);
    }

    getAllGroups(page: number, size: number, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getAllGroups(page, size, xRequestID, options).then(r => r.data);
    }

    getAllPersonsByGroupId(page: number, size: number, groupId: string, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getAllPersonsByGroupId(page, size, groupId, xRequestID, options).then(r => r.data);
    }

    getGroup(groupId: string, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getGroup(groupId, xRequestID, options).then(r => r.data);
    }

    updateGroup(groupId: string, groupToCreate: GroupToCreate, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.updateGroup(groupId, groupToCreate, xRequestID, options).then(r => r.data);
    }

    updatePersonsInGroup(groupId: string, updateGroup: UpdateGroup, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.updatePersonsInGroup(groupId, updateGroup, xRequestID, options).then(r => r.data);
    }

}