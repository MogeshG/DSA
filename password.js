function time(pass){
    if(pass.length<=0){
        console.log("Enter password");
        return;
    }
    time=1;
    for(let i=1;i<pass.length;i++){
        if(i>=1 && i<=9){
            if(pass[i]===pass[i-1])
                continue;
            else if((pass[i]%3===0) &&(pass[i]-1===pass[i-1] || pass[i]+3===pass[i-1] || pass[i]-3===pass[i-1]))
                time+=1;
            else if((pass[i]%3==2)&&(pass[i]+1===pass[i-1] || pass[i]+3===pass[i-1] || pass[i]-3===pass[i-1] || pass[i]-1===pass[i-1]))
                time+=1;
            else if((pass[i]%3==1)&&(pass[i]+1===pass[i-1] || pass[i]+3===pass[i-1] || pass[i]-3===pass[i-1]))
                time+=1;
            else{
                time+=2;
            }
        }
        else{
            console.log("Invalid Password");
            return;
        }
    }
    console.log(time);
}
let arr=[1,2,4,8,9,3,6]
time(arr);