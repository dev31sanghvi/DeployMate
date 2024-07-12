const MAX_LEN=5;
//uploading server
export function generate(){
    let ans="";
    const subset="123456789qwertyuiopasdfghjklzxcvbnm";
    // const id="";
    for (let i=0;i<MAX_LEN;i++){
        ans+=subset[Math.floor(Math.random()*subset.length)];
    }
    return ans;

}