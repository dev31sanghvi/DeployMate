//getting the path
// we need path of all the files present in the directory
import fs from "fs"
import path from "path"

export const getAllFiles=(folderPath:string)=>{

    let response :string[]=[];
 //readdirSync fn gives you all the files in the current folder (can't give recursive files)
//this function will give you all the files and folders in the current folder
 const allFilesAndFolder=fs.readdirSync(folderPath);

allFilesAndFolder.forEach(file => {

    const fullFilePath = path.join(folderPath, file);

    // check if the file is a directory
    if (fs.statSync(fullFilePath).isDirectory()) {
        response = response.concat(getAllFiles(fullFilePath))
    } else {
        //everytihng will be stored in a response array
        response.push(fullFilePath);
    }
});
return response;
}
