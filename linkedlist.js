class newNode {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size=0;
    }
    insertAtEnd(val) {
        const newnode = new newNode(val);
        if (this.head === null) {
            this.head = newnode; 
        } 
        else {
            let temp = this.head;
            while (temp.next !== null)
                temp = temp.next;
            temp.next = newnode;
            // this.display();
        }
        this.size++;
    }
    insertBeforePos(val,pos){
        let len=0;
        let temp=this.head;
        while(temp!==null){
            len+=1;
            temp=temp.next;
        }
        if(len<pos){
            console.log("Position exceed");
        }
        else{
            let newnode = new newNode(val);
            if (this.head === null) {
                this.head = newnode; 
            } else {
                let temp=this.head;
                for(let i=1;i<pos-1;i++){
                    temp=temp.next;
                }
                newnode.next=temp.next;
                if(pos!=1)
                    temp.next = newnode;
                else    
                    this.head=newnode;

            }
            console.log(`Insert ${val} before ${pos} position`);
            this.display();
        }
        this.size++;
    }
    insertAfterPos(val,pos){
        let len=0;
        let temp=this.head;
        while(temp!==null){
            len++;
            temp=temp.next;
        }
        if(len<pos){
            console.log("Position exceed");
        }
        else{
            let newnode = new newNode(val);
            if (this.head === null) {
                this.head = newnode; 
            } else {
                let temp=this.head;
                for(let i=1;i<pos;i++){
                    temp=temp.next;
                }
                newnode.next=temp.next;
                temp.next = newnode;

            }
            console.log(`Insert ${val} after ${pos} position`);
            this.display();
        }
        this.size++;
    }
    deleteAtBeg(){
        if(this.head==null){
            console.log("List is Empty");
        }
        else{
            let temp=this.head;
            this.head=this.head.next;
            temp=null;
            console.log("First element is deleted");
            this.display();
        }
        this.size--;
    }
    deleteAtEnd(){
        if(this.head==null){
            console.log("List is Empty");
        }
        else{
            let temp=this.head;
            while(temp.next.next!==null){
                temp=temp.next;
            }
            temp.next=null;
            console.log("Last element is deleted");
            this.display();
        }
        this.size--;
    }
    deleteAtPos(pos){
        if(this.size<pos || pos<0){
            console.log("Invalid Position");
            return;
        }
        if(pos==1){
            this.deleteAtBeg();
            return;
        }
        else if(pos==this.size){
            this.deleteAtEnd();
            return;
        }
        if(this.head==null){
            console.log("List is Empty");
        }
        else{
            let temp=this.head;
            for(let i=1;i<pos-1;i++){
                temp=temp.next;
            }
            let dump=temp.next;
            temp.next=temp.next.next;
            dump=null;
            console.log(`Element at ${pos} is deleted`);
            this.display();
        }
        this.size--;
    }
    removeDuplicates(){
        let values=new Set();
        let temp=this.head;
        let prev=null;
        while(temp){
            if(!values.has(temp.data)){
                values.add(temp.data);
            }
            else{
                let del=temp;
                prev.next=temp.next;
                del=null;
                this.size--;
            }
            prev=temp;
            temp=temp.next;
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

const a = new linkedList();
a.insertAtEnd(3);
a.insertAtEnd(5);
a.insertAtEnd(7);
a.insertAtEnd(9);
a.insertAtEnd(5);
// a.display();
a.insertBeforePos(8,4);
a.removeDuplicates();
a.display();
// a.insertAfterPos(1,5);
// a.deleteAtBeg();
// a.deleteAtEnd();
a.deleteAtPos(4);