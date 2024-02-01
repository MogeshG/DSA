class Node{
    constructor(val){
        this.data=val;
        this.left=null;
        this.right=null;
        this.hd=null;
    }
};
class BST{
    constructor(){
        this.root=null;
    }
    insert(val,op=0,head=this.root){
        if(!this.root){
            this.root=new Node(val);
            this.root.hd=0;
            return;
        }
        if(!head){
            head=new Node(val);
            head.hd=op;
            return head;    
        }
        else{
            if(head.data==val){
                console.log("Value already Exists");
            }
            else if(head.data>val){
                head.left=this.insert(val,head.hd-1,head.left);
            }
            else{
                head.right=this.insert(val,head.hd+1,head.right);
            }
            return head;
        }
    }
    vot(){
        let hastmap=new Map();
        let head=this.root;
        if(!head){
            return;
        }
        function votTraverse(head){
            let hdData=[];
            if(!head){
                return;
            }
            if(head.left!==null)
                votTraverse(head.left);

            if(hastmap.has(head.hd)){
                hdData=hastmap.get(head.hd);
            }
            hdData.push(head.data);
            hastmap.set(head.hd,hdData);
            if(head.right!==null)
                votTraverse(head.right);
        }
        votTraverse(this.root);
        for(let x in hastmap){
            console.log(x+"="+hastmap(x));
        }
        console.log(hastmap);
    }
    inorder(head=this.root){
        if(!head){
            return;
        }
        
        if(head.left!==null)
            this.inorder(head.left);
        console.log(head.data);
        if(head.right!==null)
            this.inorder(head.right);
    }
    preorder(head=this.root){
        if(!head){
            return;
        }

        console.log(head.data);
        if(head.left!==null)
            this.preorder(head.left);
        if(head.right!==null)
            this.preorder(head.right);
    }
    postorder(head=this.root){
        if(head===null){
            return;
        }

        if(head.left!==null)
            this.postorder(head.left);
        if(head.right!==null)
            this.postorder(head.right);
        console.log(head.data);
    }
    height(val=this.root){
        if(!val){
            console.log("Tree Empty");
            return;
        }
        function maxHeight(head=val){
            if(head!==null){
                let lheight=maxHeight(head.left);
                let rheight=maxHeight(head.right);
                return Math.max(lheight,rheight)+1;
            }else{
                return -1;
            }
        }
        console.log("Height of the tree: "+maxHeight());
    }
    // deleteNoChild(){
    //     let node=this.root;
    //     if(!node){
    //         console.log("Tree Empty");
    //         return;
    //     }
    //     deleteNode(node);
    //     function deleteNode(temp){
    //         if(temp===null)
    //             return null;
    //         else if(temp.left===null && temp.right===null){
    //             return null;
    //         }
    //         else{
    //             if(temp.left!==null)
    //                 temp.left=deleteNode(temp.left);
    //             if(temp.right!==null)
    //                 temp.right=deleteNode(temp.right);
    //             return temp;
    //         }
    //     }
    //     this.inorder();
    // }
    // deleteSingleChild(){
    //     let node=this.root;
    //     if(!node){
    //         console.log("Tree Empty");
    //         return;
    //     }
    //     deleteNode(node);
    //     this.inorder();
    //     function deleteNode(temp,count=0){
    //         if(temp===null)
    //             return null;
    //         else if((temp.left===null && temp.right!==null) || (temp.left!==null && temp.right===null)){
    //             if(temp.left!==null){
    //                 temp.left.hd+=count;
    //                 return deleteNode(temp.left,count+1);
    //             }
    //             else if(temp.right!==null){
    //                 temp.right.hd-=count;
    //                 return deleteNode(temp.right,count+1);
    //             }
    //             return temp;
    //         }
    //         else{
    //             if(temp.left!=null)
    //                 temp.left=deleteNode(temp.left);
    //             if(temp.right!=null)
    //                 temp.right=deleteNode(temp.right);
    //         }
    //         return temp;
    //     }
    // }
    leastAncestor(val1, val2) {
        let temp = this.root;
        let left = traverse(val1);
        let right = traverse(val2);
    
        function traverse(x) {
            let arr=[];
            let val = temp;
            while(val.data){
                arr.push(val.data);
                if(x>val.data){
                    val = val.right;
                }
                else if(x<val.data){
                    val = val.left;
                }
                else{
                    break;
                }
            }
            return arr;
        }
        let min = Math.min(left.length, right.length);
        for (let j=min-1;j>=0;j--) {
            if (left[j]===right[j]) {
                console.log("Least Common Ancestor:"+val1+","+val2+" = "+left[j]);
                return;
            }
        }
    }        
    sumOfSingleRoot(){
        let temp = this.root;
        let sum=0;
        function traverse(temp) {
            if((temp.left===null && temp.right!==null)||(temp.left!==null && temp.right===null)){
                sum+=temp.data;
            }
            if(temp.left)
                traverse(temp.left);
            if(temp.right)
                traverse(temp.right);
        }
        if (temp !== null) {
            traverse(temp);
        }
        console.log("Sum ="+sum);
    }
    deleteNode(val){
        this.root=this.deleteChild(val,this.root);
    }
    deleteChild(val,head){
        if(head===null)
            return head;
        else if(head.data>val)
            head.left=this.deleteChild(val,head.left);
        else if(head.data<val)
            head.right=this.deleteChild(val,head.right);
        else{
            if(head.left===null){
                return head.right;
            }
            else if(head.right===null){
                return head.left;
            }
            else{
                let temp=minimum(head.right);
                head.data=temp.data;
                head.right=this.deleteChild(temp.data,head.right);
            }
        }
        function minimum(node){
            while(node.left!==null){
                node=node.left;
            }
            return node;
        }
        return head;
    }
}

const obj=new BST();
var a=[10,6,12,4,8,14,2,5,7,13,17];
for(let i=0;i<a.length;i++){
    obj.insert(a[i]);
}

obj.height();
obj.leastAncestor(6,4);
obj.sumOfSingleRoot();
// obj.inorder();
// obj.deleteNode(10);
// obj.vot();
// console.log("Inorder");
// obj.inorder();
// console.log("Preorder");
// obj.preorder();
// console.log("Postorder");
// obj.postorder();
