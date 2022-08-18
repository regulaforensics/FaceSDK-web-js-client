const {
    FaceSdk,
    ImageSource
} = require('@regulaforensics/facesdk-webclient');
const fs = require("fs");

(async () => {
    let apiBasePath = process.env.API_BASE_PATH || "https://faceapi.regulaforensics.com"

    const face1 = fs.readFileSync('../face1.jpg').buffer
    const face2 = fs.readFileSync('../face2.jpg').buffer

    const sdk = new FaceSdk({basePath: apiBasePath})

    const person1 = await sdk.personApi.createPerson({name: "person1", metadata: {}})
    const person2 = await sdk.personApi.createPerson({name: "person2", metadata: {}})

    await sdk.personApi.addImageToPerson(person1.id, {image: {content_type: "", content: face1}})
})();
