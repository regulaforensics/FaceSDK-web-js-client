import {PersonApi as GenPersonApi} from "../api/person-api";

// @ts-ignore
import * as converter from "base64-arraybuffer";
import {GroupPage, Image, ImageFields, ImagePage, Person, PersonFields} from "../models";
import {AxiosRequestConfig} from "axios";

export class PersonApi extends GenPersonApi {
    createPerson(personFields: PersonFields, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.createPerson(personFields, xRequestID, options).then(r => r.data);
    }

    async createPersonT(personFields: PersonFields, xRequestID?: string, options?: AxiosRequestConfig): Promise<Person> {
        const response = await super.createPerson(personFields, xRequestID, options);
        return response.data;
    }

    addImageToPerson(personId: string, imageFields: ImageFields, xRequestID?: string, options?: AxiosRequestConfig): any {
        if (imageFields?.image?.content && typeof imageFields.image.content !== "string") {
            imageFields.image.content = converter.encode(imageFields.image.content)
        }
        return super.addImageToPerson(personId, imageFields, xRequestID, options).then(r => r.data);
    }

    async addImageToPersonT(personId: string, imageFields: ImageFields, xRequestID?: string, options?: AxiosRequestConfig): Promise<Image> {
        if (imageFields?.image?.content && typeof imageFields.image.content !== "string") {
            imageFields.image.content = converter.encode(imageFields.image.content)
        }
        const response = await super.addImageToPerson(personId, imageFields, xRequestID, options)
        return response.data
    }

    deleteImageOfPerson(imageId: string, personId: string, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.deleteImageOfPerson(imageId, personId, xRequestID, options).then(r => r.data);
    }

    async deleteImageOfPersonT(imageId: string, personId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<void> {
        const response = await super.deleteImageOfPerson(imageId, personId, xRequestID, options);
        return response.data; // TODO: check this method
    }

    deletePerson(personId: string, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.deletePerson(personId, xRequestID, options).then(r => r.data);
    }

    async deletePersonT(personId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<void> {
        const response = await super.deletePerson(personId, xRequestID, options);
        return response.data; // TODO: check this method
    }

    getAllGroupsByPersonId(page: number, size: number, personId: string, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getAllGroupsByPersonId(page, size, personId, xRequestID, options).then(r => r.data);
    }

    async getAllGroupsByPersonIdT(page: number, size: number, personId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<GroupPage> {
        const response = await super.getAllGroupsByPersonId(page, size, personId, xRequestID, options);
        return response.data;
    }

    getAllImagesByPersonId(page: number, size: number, personId: string, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getAllImagesByPersonId(page, size, personId, xRequestID, options).then(r => r.data);
    }

    async getAllImagesByPersonIdT(page: number, size: number, personId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<ImagePage> {
        const response = await super.getAllImagesByPersonId(page, size, personId, xRequestID, options);
        return response.data;
    }

    getImageOfPerson(imageId: string, personId: string, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getImageOfPerson(imageId, personId, xRequestID, options).then(r => r.data);
    }

    async getImageOfPersonT(imageId: string, personId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<any> {
        const response = await super.getImageOfPerson(imageId, personId, xRequestID, options);
        return response.data;
    }

    getPerson(personId: string, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getPerson(personId, xRequestID, options).then(r => r.data);
    }

    async getPersonT(personId: string, xRequestID?: string, options?: AxiosRequestConfig): Promise<Person> {
        const response = await super.getPerson(personId, xRequestID, options);
        return response.data;
    }

    updatePerson(personId: string, personFields: PersonFields, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.updatePerson(personId, personFields, xRequestID, options).then(r => r.data);
    }

    async updatePersonT(personId: string, personFields: PersonFields, xRequestID?: string, options?: AxiosRequestConfig): Promise<void> {
        const response = await super.updatePerson(personId, personFields, xRequestID, options);
        return response.data;
    }
}