class Node{
    constructor(val){
        this.data=val;
        this.next=null;
    }
};
class Stack{
    constructor(){
        this.top=null;
        this.end=null;
        this.size=0;
    }
    push(val){
        if(this.top===null){
            this.top=new Node(val);
            this.end=this.top;
        }
        else{
            let newnode=new Node(val);
            let temp=this.end;
            for(let i=1;i<this.size;i++){
                temp=temp.next;
            }
            temp.next=newnode;
            this.top=newnode;
        }
        this.size++;
        let a=this.display();
        console.log("After inserting "+val+": "+a);
    }
    pop(){
        if(this.top===null){
            console.log("Stack is Empty!!!");
        }
        else{
            let temp=this.end;
            if(this.top==this.end){
                let val=this.top.data;
                this.top=this.end=null;
                let a=this.display();
                console.log("After Deleting "+val+": Empty");
            }
            else{
                for(let i=1;i<this.size-1;i++){
                    temp=temp.next;
                }
                var val=temp.next.data;
                temp.next=null;
                this.top=temp;
                let a=this.display();
                console.log("After Deleting "+val+": "+a);
            }
            this.size--;
        }
    }
    display(){
        let a=[];
        let temp=this.end;
        while(temp!==null){
            a.push(temp.data);
            temp=temp.next;
        }
        return a;
    }
}
const obj=new Stack();
obj.push(5);
obj.push(7);
obj.push(9);
obj.push(11);
obj.pop();
obj.pop();
obj.pop();
obj.pop();
obj.pop();
obj.push(11);
