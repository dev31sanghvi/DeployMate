import { S3 } from "aws-sdk";
import fs from "fs";
import dotenv from "dotenv";

// aws credentials
// s3 bucket
dotenv.config();
const s3 = new S3({
  // region: "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  endpoint: "endpoint url ",
});

// there will be an output folder in the root directory
// file name will be : output/123456/index.js
//file path: /user/desktop/majorproject/deploymate/dist/output/123456/index.js

export const uploadFile = async (filename: string, localfilepath: string) => {
  //syncronpusly readfile
  const filecontent = fs.readFileSync(localfilepath);
  // might take some time to upload
  const response = await s3
    .upload({
      // params
      Body: filecontent,
      Bucket: "deploymate",
      Key: filename,
    })
    .promise();
  // for checking the upload status
  console.log(response);
};
