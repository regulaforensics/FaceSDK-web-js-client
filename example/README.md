# Regula Face Recognition web API Node 8.0+ client

Requirements:
- installed npm
- installed node 8.0 or higher

Verify npm and node versions:
```bash
npm --version
> 6.4.16
node --version     
> v14.5.0
```

Cloning example:
```bash
git clone git@github.com:regulaforensics/FaceRecognition-web-js-client.git
cd FaceRecognition-web-js-client
```

Setup project and download dependencies:
```bash
npm install
npm run build
```

### Running with local Regula Face Recognition web API installation

Assuming you have successfully launched instance, use next line command to run example:
```bash
cd example
npm install
node .

# If Regula Face Recognition web API is running not on localhost, specify host via env variable:
API_BASE_PATH="api_base_path" node .
```

### Running using Regula Face Recognition web API test SaaS

Execute example:
```bash
cd example
API_BASE_PATH="api_base_path" node .
```

### Output

This sample generates next text output:
```text
-----------------------------------------------------------------
                         Compare Results                         
-----------------------------------------------------------------
pair(1,2)   similarity: 0.9995848536491394
pair(1,3)   similarity: 0.008510462939739227
pair(2,3)   similarity: 0.008510462939739227
-----------------------------------------------------------------
                         Detect Results                          
-----------------------------------------------------------------
detectorType: 3
landmarkType: 2
landmarks: [[588,342],[735,342],[668,418],[607,502],[725,502]]
roi: [508,267,310,310]
-----------------------------------------------------------------
                   Check video liveness result                   
-----------------------------------------------------------------
liveness_status: 0
-----------------------------------------------------------------
                   Check depth liveness result                   
-----------------------------------------------------------------
index: 0
code: 0
liveness_status: 0
-----------------------------------------------------------------
                   Check image liveness result                   
-----------------------------------------------------------------
index: 0
code: 0
liveness_status: 0
-----------------------------------------------------------------
```