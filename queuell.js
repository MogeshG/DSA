class newNode {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class queue {
    constructor() {
        this.head = null;
    }
    insert(val){
        if(this.head===null){
            this.head=new newNode(val);
        }
        else{
            let newnode=new newNode(val);
            let temp=this.head;
            while(temp.next!==null)
                temp=temp.next;
            temp.next=newnode;
        }
    }
    remove(){
        if(this.head===null){
            console.log("Queue is empty")
        }
        else{
            let temp=this.head;
            this.head=this.head.next;
            temp=null;
            console.log(`Removed successfully`);
            this.display();
        }
    }
    display() {
        let value=[];
        let temp = this.head;
        while (temp!== null) {
            value.push(temp.data);
            temp=temp.next;
        }
        console.log(value);
    }
}
const obj=new queue;
obj.insert(1);
obj.insert(2);
obj.insert(3);
obj.insert(4);
obj.display();
obj.remove();
obj.remove();
