# Development

Models generation based on [openapi spec](https://github.com/regulaforensics/FaceSDK-web-openapi).

## Generation

To regenerate models from openapi definition,
clone [latest open api definitions](https://github.com/regulaforensics/FaceSDK-web-openapi)
and use next command from the project root.
```bash
./update-models.sh
```

## Problem solving

To solve new problems, use the generator
settings ([typescript](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/typescript-axios.md),
[common](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/customization.md))
and [templates](https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator/src/main/resources/typescript-axios).

**Do not edit the generated files! They will be overwritten after generation!**
