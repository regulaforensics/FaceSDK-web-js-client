const { FaceSdk } = require('@regulaforensics/facesdk-webclient');
const fs = require('fs');

(async () => {
    let apiBasePath = process.env.API_BASE_PATH || 'http://127.0.0.0:41101';

    const face1 = fs.readFileSync('../face1.jpg').buffer;
    const face2 = fs.readFileSync('../face2.jpg').buffer;

    const sdk = new FaceSdk({ basePath: apiBasePath });

    const person1Id = (await sdk.personApi.createPerson({ name: 'person2', metadata: {} })).id;

    const person2Id = (await sdk.personApi.createPerson({ name: 'person2', metadata: {} })).id;

    await sdk.personApi.addImageToPerson(person1Id, { image: { content: face1 } });
    await sdk.personApi.addImageToPerson(person2Id, { image: { content: face2 } });

    const person1 = await sdk.personApi.getPerson(person1Id);
    const person2 = await sdk.personApi.getPerson(person2Id);

    const group = await sdk.groupApi.createGroup({ name: 'group1', metadata: {} });

    await sdk.groupApi.updatePersonsInGroup(group.id, { addItems: [person1Id, person2Id] });

    const searchResult = await sdk.searchApi.search({
        group_ids: [],
        image: { content: face1 },
        limit: 10,
        threshold: 0.8,
    });

    console.log(`Person #1 ${person1.id} ${person1.name}`);
    console.log(`Person #2 ${person2.id} ${person2.name}`);
    console.log(`Group ${group.id} ${group.name}`);
    console.log(searchResult);
})();
