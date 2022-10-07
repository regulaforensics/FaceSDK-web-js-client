import {PersonApi as GenPersonApi} from "../api/person-api";

// @ts-ignore
import * as converter from "base64-arraybuffer";
import {ImageFields, PersonFields} from "../models";
import {AxiosRequestConfig} from "axios";

export class PersonApi extends GenPersonApi {
    createPerson(personFields: PersonFields, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.createPerson(personFields, xRequestID, options).then(r => r.data);
    }

    addImageToPerson(personId: number, imageFields: ImageFields, xRequestID?: string, options?: AxiosRequestConfig): any {
        if (imageFields.image.content && typeof imageFields.image.content !== "string") {
            imageFields.image.content = converter.encode(imageFields.image.content)
        }
        return super.addImageToPerson(personId, imageFields, xRequestID, options).then(r => r.data);
    }

    deleteImageOfPerson(imageId: number, personId: number, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.deleteImageOfPerson(imageId, personId, xRequestID, options).then(r => r.data);
    }

    deletePerson(personId: number, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.deletePerson(personId, xRequestID, options).then(r => r.data);
    }

    getAllGroupsByPersonId(page: number, size: number, personId: number, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getAllGroupsByPersonId(page, size, personId, xRequestID, options).then(r => r.data);
    }

    getAllImagesByPersonId(page: number, size: number, personId: number, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getAllImagesByPersonId(page, size, personId, xRequestID, options).then(r => r.data);
    }

    getAllPersons(page: number, size: number, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getAllPersons(page, size, xRequestID, options).then(r => r.data);
    }

    getImageOfPerson(imageId: number, personId: number, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getImageOfPerson(imageId, personId, xRequestID, options).then(r => r.data);
    }

    getPerson(personId: number, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.getPerson(personId, xRequestID, options).then(r => r.data);
    }

    updatePerson(personId: number, personFields: PersonFields, xRequestID?: string, options?: AxiosRequestConfig): any {
        return super.updatePerson(personId, personFields, xRequestID, options).then(r => r.data);
    }
}