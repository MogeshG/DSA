let string="CODINGMART TECHNOLOGIES";
let row=4;
let col=Math.ceil(string.length/(row-1));
let a = Array.from({ length: row }, () => Array(col).fill(0));
// let r=0,c=0,count=0;
// for(let i=0;i<string.length;i++){
//     if(r===row){
//         r=0;
//         c-=(row-1);
//     } 
//     a[r][c]=string[i];
//     r++;
//     c++;
//     count++;
// }
// res="";
// for(let i=0;i<row;i++){
//     for(let j=0;j<col;j++){
//         if((j<=i && a[i][j]==0) || (a[i][j]===" " && ((a[i][j+1]!==0)&&(a[i][j+1]!==" "))) ){
//             res+="*";
//         }
//         else if(a[i][j]!==0 && (a[i][j]!==" ")){
//             res+=a[i][j];
//         }
//     }
// }
console.log(a);
// console.log(res)
