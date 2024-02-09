let a=[];
function insert(val){
    a[a.length]=val;   
    console.log(a);
}
function remove(){
    if(a.length==0){
        console.log("Stack is Empty");
    }
    else{
        a.length--;
        console.log(a);
    }
}
insert(2);
insert(5);
insert(7);
insert(9);

remove();

insert(10);
remove();
remove();
remove();
remove();
remove();
