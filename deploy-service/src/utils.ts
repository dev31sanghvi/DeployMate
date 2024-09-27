import path from "path";
import { exec,spawn } from "child_process"; // this lets you execute shell commands

export function generateProjectBuild (id:string){
    // this will figureout the path where the build gonna execute.
    return new Promise((resolve)=>{
        const child=exec(`cd ${path.join(__dirname, `output/${id}`)} & npm install & npm run build`)

        // handling the output
        child.stdout?.on('data', function(data) {
            console.log('stdout: ' + data);
        });
        child.stderr?.on('data', function(data) {
            console.log('stderr: ' + data);
        });
// handling process completion
        child.on('close', function(code) {
           resolve("")
        });

    })
}