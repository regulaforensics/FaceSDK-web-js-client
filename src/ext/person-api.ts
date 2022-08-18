import {PersonApi as GenPersonApi} from "../api/person-api";
// @ts-ignore
import * as converter from "base64-arraybuffer";
import {InlineObject, Person, PersonFields} from "../models";


export class PersonApi extends GenPersonApi {
    addImageToPerson(personId: number, inlineObject: InlineObject){
        inlineObject.image.content = converter.encode(inlineObject.image.content)
        super.addImageToPersonGen(personId, inlineObject).then(r => r.data);
    }

    public createPerson(personFields: PersonFields): Promise<Person>{
        super.createPersonGen(personFields).then(r => r.data);
    }

    deleteImageOfPerson(imageId: number, personId: number, options?: any){
        super.deleteImageOfPersonGen(imageId, personId, options).then(r => r.data);
    }

    deletePerson(personId: number, options?: any){
        super.deletePersonGen(personId, options).then(r => r.data)
    }

    getAllGroupsByPersonId(page: number, size: number, personId: number, options?: any) {
        return super.getAllGroupsByPersonIdGen(page, size, personId, options).then(r => r.data);
    }
}