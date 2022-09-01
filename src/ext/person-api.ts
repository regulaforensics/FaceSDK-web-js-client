import {PersonApi as GenPersonApi} from "../api/person-api";

// @ts-ignore
import * as converter from "base64-arraybuffer";
import {ImageFields, PersonFields} from "../models";
import {AxiosRequestConfig} from "axios";

export class PersonApi extends GenPersonApi {
    createPerson(personFields: PersonFields, options?: AxiosRequestConfig): any {
        return super.createPerson(personFields, options).then(r => r.data);
    }

    addImageToPerson(personId: number, imageFields: ImageFields, options?: AxiosRequestConfig): any {
        if (imageFields.image.content && typeof imageFields.image.content !== "string") {
            imageFields.image.content = converter.encode(imageFields.image.content)
        }
        return super.addImageToPerson(personId, imageFields, options).then(r => r.data);
    }

    deleteImageOfPerson(imageId: number, personId: number, options?: AxiosRequestConfig): any {
        return super.deleteImageOfPerson(imageId, personId, options).then(r => r.data);
    }

    deletePerson(personId: number, options?: AxiosRequestConfig): any {
        return super.deletePerson(personId, options).then(r => r.data);
    }

    getAllGroupsByPersonId(page: number, size: number, personId: number, options?: AxiosRequestConfig): any {
        return super.getAllGroupsByPersonId(page, size, personId, options).then(r => r.data);
    }

    getAllImagesByPersonId(page: number, size: number, personId: number, options?: AxiosRequestConfig): any {
        return super.getAllImagesByPersonId(page, size, personId, options).then(r => r.data);
    }

    getAllPersons(page: number, size: number, options?: AxiosRequestConfig): any {
        return super.getAllPersons(page, size, options).then(r => r.data);
    }

    getImageOfPerson(imageId: number, personId: number, options?: AxiosRequestConfig): any {
        return super.getImageOfPerson(imageId, personId, options).then(r => r.data);
    }

    getPerson(personId: number, options?: AxiosRequestConfig): any {
        return super.getPerson(personId, options).then(r => r.data);
    }

    updatePerson(personId: number, personFields: PersonFields, options?: AxiosRequestConfig): any {
        return super.updatePerson(personId, personFields, options).then(r => r.data);
    }
}