import { createClient } from 'redis';
// import { path } from 'path';
import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generate } from "./generate";
import path from "path"
import { getAllFiles } from "./file";
import { uploadFile } from "./aws";

const publisher = createClient();
publisher.connect();


const subscriber = createClient();
subscriber.connect();
// uploadFile("dev/package.json","/home/dev/Desktop/major project/deploymate/dist")

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

    await new Promise((resolve) => setTimeout(resolve, 5000))
    publisher.lPush("build-queue",id);

    publisher.hSet("status", id, "uploaded");

    res.json({
        id:id
    })


// this is the status endpoint
    app.get("/status", async (req, res)=>{
        const id=req.query.id;
        const response=await subscriber.hGet("status",id as string);
        res.json({
            status:response
        })
    })
})

app.listen(3000);