class Graph{

    // constructor(noVertices){
    //     this.size=noVertices;
    //     this.adjMatrix = new Array(this.size).fill(0).map(() => new Array(this.size).fill(0));
    // }
    // addVertices(vertex){
    //     Graph(vertex);
    // }
    constructor(){
        this.size=0;
        this.adjMatrix=[];
        this.vertices=new Map();
    }
    addVertex(val){
        if(!this.vertices[val]){
            this.vertices[val]=this.vertices.size;
            let arr=[];
            for(let i=0;i<=this.vertices[val];i++){
                for(let j=0;j<=this.vertices[val];j++){
                    // if(!arr[i][j])
                        arr[i][j]=0;
                }
            }
            console.log(this.vertices);
            // console.log(arr);

        }
    }
    display(){
        for(let i=0;i<this.size;i++){
            let arr=[];
            for(let j=0;j<this.size;j++)
                arr.push(this.adjMatrix[i][j]);
            console.log(arr);
        }
        
    }
    addEdge(v1,v2){
        if(v1>=this.size || v1>=this.size){
            console.log("Vertex not present");
        }
        else{
            this.adjMatrix[v1][v2]=1;
            this.adjMatrix[v2][v1]=1;
        }
    }
}
const obj=new Graph();
obj.addVertex('A');
// obj.addEdge(1,4);
// obj.addEdge(1,2);
// obj.display();
// console.log(obj.vertices);