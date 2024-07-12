import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generate } from "./generate";

const app=express();
app.use(cors())
app.use(express.json());

// endpoint to deploy the code from github URL
app.post("/deploy",async(req,res)=>{
    const repoUrl=req.body.repoUrl;
    const id=generate();
    // id is the random string generated
    await simpleGit().clone(repoUrl,`output/${id}` );
    res.json({
        id:id
    })
})

app.listen(3000);