class Graph{
    constructor(){
        this.adjList={};
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
           this.adjList[vertex]= new Set();
        }
    }
    addEdge(v1,v2){
        if(!this.adjList[v1]){
            this.addVertex(v1);
            
        }
        if(!this.adjList[v2]){
            this.addVertex(v2);
            
        }
        this.adjList[v1].add(v2);
        this.adjList[v2].add(v1);
    }
    display(){
        for(let x in this.adjList){
            console.log(x+" -> "+[...this.adjList[x]])
        }
    }
}
const obj=new Graph();
// obj.addVertex("A");
// obj.addVertex("B");
// obj.addVertex("C");
obj.addEdge("A","B");
obj.addEdge("B","C");
// obj.addEdge("C","A");
obj.display();