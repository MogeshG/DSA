let a=[];
function insert(val){
    a[a.length]=val;   
}
function remove(){
    if(a.length==0){
        console.log("Stack is Empty");
    }
    else{
        for(let i=0;i<a.length-1;i++){
            a[i]=a[i+1];
        }
        a.length-=1;
        console.log(a);
    }
}

insert(2);
insert(5);
insert(7);
insert(9);
console.log(a);

remove();

insert(10);
console.log(a);