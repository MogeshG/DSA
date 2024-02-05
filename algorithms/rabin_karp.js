function rabinKarp(string,sub){
    let hashcode=0;
    console.log("Match positions:");
    for(x of sub)
        hashcode+=x.charCodeAt(0);
    for(let i=0;i<=string.length-sub.length;i++){
        let x=0,match=0;
        while(x<sub.length){
            match+=string[i+x].charCodeAt(0);
            x++;
        }
        if(match===hashcode){
            console.log(i+1);
            i+=sub.length-1;
        }
    }
}

let s="abcababaabc";
let ss="ab";
rabinKarp(s,ss);