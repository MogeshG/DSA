function kmp(string,pattern){
    let x=new Array(pattern.length).fill(0);
    for(a in pattern){
        let c=0;
        for(let i=a-1;i>=0;i--){
            if(pattern[a]===pattern[i]){
                c=x[a-1]+1;
            }
        }
        x[a]=c;
    }
    // console.log(x);

    console.log("Match Position:");
    let i=0,j=0,c=0;
    while(i<=string.length){
        if(string[i]===pattern[j]){
            i++;
            j++;
            c++;
        }
        else if(string[i]!==pattern[j] && j>0){
            j=x[j-1];
            c-=j;
        }
        else{
            i++;
            j=0;
            c=0;
        }
        if(c===pattern.length){
            console.log(i-pattern.length+1);
            // i++;
            c=0;
            j=0;
        }
    }
}
let string="abyabcabcaby";
let pattern="abcaby";
kmp(string,pattern);