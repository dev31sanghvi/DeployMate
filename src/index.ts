import express from "express";
import cors from "cors";

const app=express();
app.use(cors())

// endpoint to deploy the code from github URL
app.post("/deploy",async(req,res)=>{
    const repoUrl=req.body.repoUrl;
    res.json({})
})

app.listen(3000);