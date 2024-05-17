import { PersonApi as GenPersonApi } from '../api/person-api';
import * as converter from 'base64-arraybuffer';
import { GroupPage, Image, ImagePage, Person, PersonFields, AddImageToPersonRequest } from '../models';
import { AxiosRequestConfig, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';

export class PersonApi {
    private superClass: GenPersonApi;
    constructor(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
        this.superClass = new GenPersonApi(configuration, basePath, axios);
    }

    async createPerson(personFields: PersonFields, xRequestID?: string, options?: AxiosRequestConfig): Promise<Person> {
        const personFieldsWithGuard = {
            ...personFields,
            metadata: !personFields?.metadata ? {} : personFields.metadata,
        };
        const response = await this.superClass.createPerson(personFieldsWithGuard, xRequestID, options);
        return response.data;
    }
    async addImageToPerson(
        personId: string,
        imageFields: AddImageToPersonRequest,
        xRequestID?: string,
        options?: AxiosRequestConfig,
    ): Promise<Image> {
        if (imageFields?.image?.content && typeof imageFields.image.content !== 'string') {
            imageFields.image.content = converter.encode(imageFields.image.content);
        }
        const response = await this.superClass.addImageToPerson(personId, imageFields, xRequestID, options);
        return response.data;
    }
    async deleteImageOfPerson(
        imageId: string,
        personId: string,
        xRequestID?: string,
        options?: AxiosRequestConfig,
    ): Promise<void> {
        await this.superClass.deleteImageOfPerson(imageId, personId, xRequestID, options);
    }
    async deletePerson(personId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<void> {
        await this.superClass.deletePerson(personId, xRequestID, options);
    }
    async getAllGroupsByPersonId(
        page: number,
        size: number,
        personId: string,
        xRequestID?: string,
        options?: AxiosRequestConfig,
    ): Promise<GroupPage> {
        const response = await this.superClass.getAllGroupsByPersonId(personId, page, size, xRequestID, options);
        return response.data;
    }
    async getAllImagesByPersonId(
        page: number,
        size: number,
        personId: string,
        xRequestID?: string,
        options?: AxiosRequestConfig,
    ): Promise<ImagePage> {
        const response = await this.superClass.getAllImagesByPersonId(personId, page, size, xRequestID, options);
        return response.data;
    }
    async getImageOfPerson(
        imageId: string,
        personId: string,
        xRequestID?: string,
        options?: AxiosRequestConfig,
    ): Promise<unknown> {
        const response = await this.superClass.getImageOfPerson(imageId, personId, xRequestID, options);
        return response.data;
    }
    async getPerson(personId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<Person> {
        const response = await this.superClass.getPerson(personId, xRequestID, options);
        return response.data;
    }
    async updatePerson(
        personId: string,
        personFields: PersonFields,
        xRequestID?: string,
        options?: AxiosRequestConfig,
    ): Promise<void> {
        await this.superClass.updatePerson(personId, personFields, xRequestID, options);
    }
}
