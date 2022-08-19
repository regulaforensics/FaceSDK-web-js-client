import {GroupApi as GenGroupApi} from "../api/group-api";
import {GroupToCreate, UpdateGroup} from "../models";
import {AxiosRequestConfig} from "axios";

export class GroupApi extends GenGroupApi {
    createGroup(groupToCreate: GroupToCreate, options?: AxiosRequestConfig): any {
        return super.createGroup(groupToCreate, options).then(r => r.data);
    }

    deleteGroup(groupId: number, options?: AxiosRequestConfig): any {
        return super.deleteGroup(groupId, options).then(r => r.data);
    }

    getAllGroups(page: number, size: number, name?: string, options?: AxiosRequestConfig): any {
        return super.getAllGroups(page, size, name, options).then(r => r.data);
    }

    getAllPersonsByGroupId(page: number, size: number, groupId: number, options?: AxiosRequestConfig): any {
        return super.getAllPersonsByGroupId(page, size, groupId, options).then(r => r.data);
    }

    getGroup(groupId: number, options?: AxiosRequestConfig): any {
        return super.getGroup(groupId, options).then(r => r.data);
    }

    updateGroup(groupId: number, groupToCreate: GroupToCreate, options?: AxiosRequestConfig): any {
        return super.updateGroup(groupId, groupToCreate, options).then(r => r.data);
    }

    updatePersonsInGroup(groupId: number, updateGroup: UpdateGroup, options?: AxiosRequestConfig): any {
        return super.updatePersonsInGroup(groupId, updateGroup, options).then(r => r.data);
    }

}