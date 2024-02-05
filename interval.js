let index=[ [1,4],[5,9],[2,5],[2,7],[10,11],[1,2],[3,4],[5,6],[4,5] ];
let res=[];
console.log(index.sort((a,b)=>{
    if(a[0]===b[0]) return a[1]-b[1];
    else return a[0]-b[0]}));

let a=index[0];
res.push(a);
let b=index[0][1];
for(let i=1;i<index.length;i++){
        if(i<index.length-1 && b>index[i][0] && index[i][1]>index[i+1][1]){
            res.pop();
            res.push(index[i+1]);
            b=index[i+1][1];
            continue;
        }
         if(b<=index[i][0]){
                res.push(index[i]);
                b=index[i][1];
        }
}
console.log(res);
