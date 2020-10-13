# Development

Js client is written using typescript, mainly generated from [OpenAPI spec](https://github.com/regulaforensics/FaceRecognition-web-openapi). 
Openapi-generator output used as implementation base(see packages `/src/api`, `/scr/models`). 
All custom logic, on top of generated files, should be places in `/src/ext` folder.

To regenerate models clone [latest OpenAPI definitions](https://github.com/regulaforensics/FaceRecognition-web-openapi)
and set `FACER_DEFINITION_FOLDER` as path to cloned directory, for example:
```bash
FACER_DEFINITION_FOLDER="/home/user/projects/FaceRecognition-api-openapi"
```
Then use next command from the project root:
```bash
docker run --rm -v "${PWD}:/client" -v "${FACER_DEFINITION_FOLDER}:/definitions" \
openapitools/openapi-generator-cli generate -g typescript-axios \
-i /definitions/index.yml -o /client/src -c /client/ts-generator-config.json \
-t /client/generator-templates
```
