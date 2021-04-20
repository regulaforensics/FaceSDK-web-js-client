# Development

Js client is written using typescript, mainly generated from [OpenAPI spec](https://github.com/regulaforensics/FaceSDK-web-openapi). 
Openapi-generator output used as implementation base(see packages `/src/api`, `/scr/models`). 
All custom logic, on top of generated files, should be places in `/src/ext` folder.

To regenerate models from openapi definition, 
clone [latest open api definitions](https://github.com/regulaforensics/FaceSDK-web-openapi) 
to a client's parent folder ./../.
Than,use next command from the project root:
```bash
./update-models.sh
```
