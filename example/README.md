# Regula FaceSDK web API Node 8.0+ client

Requirements:
- installed npm 6 or higher
- installed node 12 or higher

Verify npm and node versions:
```bash
npm --version
> 6.4.16
node --version     
> v12.18.3
```

Cloning example:
```bash
git clone git@github.com:regulaforensics/FaceSDK-web-js-client.git
cd FaceSDK-web-js-client
```

Setup project and download dependencies:
```bash
npm install
npm run build
cd example
npm install
```

### Running with local Regula FaceSDK web API installation

Assuming you have successfully launched instance, use next line command to run example:
```bash
# from example folder
node .

# If Regula FaceSDK web API is running not on localhost, specify host via env variable:
API_BASE_PATH="http://192.168.0.101:41101" node .
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
```
