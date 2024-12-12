import { S3 } from 'aws-sdk';
import fs from 'fs';
import path from 'path';

const s3 = new S3({
  accessKeyId: 'your accessKeyId',
  secretAccessKey:
    'your secretAccessKey',
  endpoint: 'https://e21220f4758c08sgbira9c388712d42ef2.r2.cloudflarestorage.com',
});

export async function downloadFolderS3(prefix: string) {
  // prefix is basically your location where you wanna copy the files
  const allFiles = await s3
    .listObjectsV2({
      // download all files from s3 bucket
      Bucket: 'deploymate',
      Prefix: prefix,
    })
    .promise();

  //downloads all files from bucket and saves them locally .(in output folder)
  const allPromises =
    allFiles.Contents?.map(async ({ Key }) => {
      return new Promise(async (resolve) => {
        if (!Key) {
          resolve('');
          return;
        }
        const finalOutputPath = path.join(__dirname, Key);
        const outputFile = fs.createWriteStream(finalOutputPath);
        const dirName = path.dirname(finalOutputPath);
        if (!fs.existsSync(dirName)) {
          fs.mkdirSync(dirName, { recursive: true });
        }
        s3.getObject({
          Bucket: 'deploymate',
          Key,
        })
          .createReadStream()
          .pipe(outputFile)
          .on('finish', () => {
            console.log('file downloaded');
            resolve("");
          });
      });
    }) || [];
  console.log('awaiting');


  // this will wait for a minute or so and will see if all the files are copied
  await Promise.all(allPromises?.filter((x) => x !== undefined));
}
