a=[3,2,1];
b=[];
c=[];
function insert(val,x){
    if(x==='A'){
        a.push(val);
    }
    else if(x==='B'){
        b.push(val);
    }
    else{
        c.push(val);
    }
}
function remove(x){
    if(x==='A'){
        a.pop();
    }
    else if(x==='B'){
        b.pop();
    }
    else{
        c.pop();
    }
}
function display(x){
        console.log(a);
        console.log(b);
        console.log(c);
}
function towerOfHanoi(n, from, mid, to) {
    if(n===1){
        remove(from);
        insert(n,to);
        console.log("Move disk "+n+" from "+from+" to "+to);
        display();
    }
    else{
        towerOfHanoi(n-1,from,to,mid);
        remove(from);
        insert(n,to);
        console.log("Move disk "+n+" from "+from+" to "+to);
        display();
        towerOfHanoi(n-1,mid,from,to);
    }

}

towerOfHanoi(3, 'A', 'B', 'C');


