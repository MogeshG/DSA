let string="abcaabacab";
let sub="ab";
let test=sub+'$'+string;
let l=test.length;
let z=new Array();
z[0]=0;
let i=0,j=1;
let c=0;
while(j<=test.length){
    if(test[i]===test[j]){
        i++;
        j++;
        c++;
    }
    else{
        z.push(c);
        j++;
        j-=c;
        c=0;
        i=0;
    }
}
console.log("Positions are:");
for(x in z){
    if(z[x]===sub.length){
        console.log(x-sub.length);
    }
}