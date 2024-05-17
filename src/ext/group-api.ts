import { GroupApi as GenGroupApi } from '../api/group-api';
import { Group, GroupPage, GroupToCreate, PersonsPage, UpdateGroup } from '../models';
import { AxiosRequestConfig, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';

export class GroupApi {
    private superClass: GenGroupApi;
    constructor(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
        this.superClass = new GenGroupApi(configuration, basePath, axios);
    }

    async createGroup(groupToCreate: GroupToCreate, xRequestID?: string, options?: AxiosRequestConfig): Promise<Group> {
        const groupToCreateWithGuard = {
            ...groupToCreate,
            metadata: !groupToCreate?.metadata ? {} : groupToCreate.metadata,
        };
        const response = await this.superClass.createGroup(groupToCreateWithGuard, xRequestID, options);
        return response.data;
    }

    async deleteGroup(groupId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<void> {
        await this.superClass.deleteGroup(groupId, xRequestID, options);
    }

    async getAllGroups(
        page: number,
        size: number,
        xRequestID?: string,
        options?: AxiosRequestConfig,
    ): Promise<GroupPage> {
        const response = await this.superClass.getAllGroups(page, size, xRequestID, options);
        return response.data;
    }
    async getAllPersonsByGroupId(
        page: number,
        size: number,
        groupId: string,
        xRequestID?: string,
        options?: AxiosRequestConfig,
    ): Promise<PersonsPage> {
        const response = await this.superClass.getAllPersonsByGroupId(groupId, page, size, xRequestID, options);
        return response.data;
    }
    async getGroup(groupId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<Group> {
        const response = await this.superClass.getGroup(groupId, xRequestID, options);
        return response.data;
    }

    async updateGroup(
        groupId: string,
        groupToCreate: GroupToCreate,
        xRequestID?: string,
        options?: AxiosRequestConfig,
    ): Promise<void> {
        await this.superClass.updateGroup(groupId, groupToCreate, xRequestID, options);
    }
    async updatePersonsInGroup(
        groupId: string,
        updateGroup: UpdateGroup,
        xRequestID?: string,
        options?: AxiosRequestConfig,
    ): Promise<void> {
        await this.superClass.updatePersonsInGroup(groupId, updateGroup, xRequestID, options);
    }
}
