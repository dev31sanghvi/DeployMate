// import { path } from 'path';
import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generate } from "./generate";
import path from "path"
import { getAllFiles } from "./file";
import { uploadFile } from "./aws";


// can get the absolute path from __dirname
console.log(__dirname);
const app=express();
app.use(cors())
app.use(express.json());

// endpoint to deploy the code from github URL
app.post("/deploy",async(req,res)=>{
    const repoUrl=req.body.repoUrl;
    const id=generate();
    // id is the random string generated
    await simpleGit().clone(repoUrl, path.join(__dirname,`output/${id}` ));

    const files=getAllFiles(path.join(__dirname,`output/${id}`));

    files.forEach(async file => {
        await uploadFile(file.slice(__dirname.length + 1), file);
    })

    res.json({
        id:id
    })
})

app.listen(3000);
