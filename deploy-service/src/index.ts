import { createClient, commandOptions } from 'redis';
import { downloadFolderS3 } from './aws';
// import { copyFinalDist, downloadS3Folder } from "./aws";
// import { buildProject } from "./utils";

// this loop will pull the value from the build-queue(redis)
const subscriber = createClient();
subscriber.connect(); // locally redis is running on 6379 port

async function main() {
  while (1) {
    // this is an infinitely running while loop

    const res = await subscriber.brPop(
      commandOptions({ isolated: true }),
      'build-queue',
      0 // 0 basically is a timestamp . It will wait for the value to be pushed in the queue
    );

    // console.log(res?.element);
    //@ts-ignore
    const id = res.element;
    await downloadFolderS3(`/output/${id}`); // this will be the folder that will be pulled from S3
  }
}
//calling main function
main();
