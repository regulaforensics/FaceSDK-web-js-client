import {GroupApi as GenGroupApi} from "../api/group-api";
import {Group, GroupPage, GroupToCreate, PersonsPage, UpdateGroup} from "../models";
import {AxiosRequestConfig} from "axios";

export class GroupApi extends GenGroupApi {
    createGroup(groupToCreate: GroupToCreate, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.createGroup(groupToCreate, xRequestID, options).then(r => r.data);
    }

    async createGroupT(groupToCreate: GroupToCreate, xRequestID?: string, options?: AxiosRequestConfig): Promise<Group> {
        const response = await super.createGroup(groupToCreate, xRequestID, options);
        return response.data;
    }

    deleteGroup(groupId: string, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.deleteGroup(groupId, xRequestID, options).then(r => r.data);
    }

    async deleteGroupT(groupId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<void> {
        const response = await super.deleteGroup(groupId, xRequestID, options);
        return response.data;
    }

    getAllGroups(page: number, size: number, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getAllGroups(page, size, xRequestID, options).then(r => r.data);
    }

    async getAllGroupsT(page: number, size: number, xRequestID?: string, options?: AxiosRequestConfig): Promise<GroupPage> {
        const response = await super.getAllGroups(page, size, xRequestID, options);
        return response.data;
    }

    getAllPersonsByGroupId(page: number, size: number, groupId: string, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getAllPersonsByGroupId(page, size, groupId, xRequestID, options).then(r => r.data);
    }

    async getAllPersonsByGroupIdT(page: number, size: number, groupId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<PersonsPage> {
        const response = await super.getAllPersonsByGroupId(page, size, groupId, xRequestID, options);
        return response.data;
    }

    getGroup(groupId: string, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getGroup(groupId, xRequestID, options).then(r => r.data);
    }

    async getGroupT(groupId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<Group> {
        const response = await super.getGroup(groupId, xRequestID, options);
        return response.data;
    }

    updateGroup(groupId: string, groupToCreate: GroupToCreate, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.updateGroup(groupId, groupToCreate, xRequestID, options).then(r => r.data);
    }

    async updateGroupT(groupId: string, groupToCreate: GroupToCreate, xRequestID?: string, options?: AxiosRequestConfig): Promise<void> {
        const response = await super.updateGroup(groupId, groupToCreate, xRequestID, options);
        return response.data;
    }

    updatePersonsInGroup(groupId: string, updateGroup: UpdateGroup, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.updatePersonsInGroup(groupId, updateGroup, xRequestID, options).then(r => r.data);
    }

    async updatePersonsInGroupT(groupId: string, updateGroup: UpdateGroup, xRequestID?: string, options?: AxiosRequestConfig): Promise<void> {
        const response = await super.updatePersonsInGroup(groupId, updateGroup, xRequestID, options);
        return response.data;
    }

}