//? Graphs using adjacency list

class Graph { //? Undirected Graph
    constructor() {
        this.adjacencyList = {};

    }
    addVertex(vertex) {
        // if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2) {
        //? accepts two vertices
        //? reassign the key of vertex1 to be an array without vertex2
        //? reassign the key of vertex2 to be an array without vertex1

        // let list = this.adjacencyList;
        // const arr1 = this.adjacencyList[vertex1];
        // const idx1 = arr1.indexOf(vertex2);
        // arr1.splice(idx1, 1);



        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((el) => {
            return el !== vertex2
        });

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((el) => {
            return el !== vertex1
        });





        // let arr2 = this.adjacencyList[vertex2];
        // let idx2 = arr2.indexOf(vertex1);
        // arr2.splice(idx2, 1)
    }



    removeVertex(vertex) {
        // should accept a vertex
        let arr = this.adjacencyList[vertex];
        arr.forEach(city => {
            this.adjacencyList[city] = this.adjacencyList[city].filter((el) => {
                return el !== vertex;
            });


        });
        delete this.adjacencyList[vertex];
    }

    // removeVertex2(vertex) {
    //     while (this.adjacencyList[vertex].length) {
    //         const adjacentVertex = this.adjacencyList[vertex].pop();
    //         this.removeEdge(vertex, adjacentVertex);
    //     }
    //     delete this.adjacencyList[vertex];

    // }

    removeVertex2(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
}

let g = new Graph();

g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Tokyo");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");


console.log(g.adjacencyList);

g.removeVertex("Tokyo");
console.log(g.adjacencyList);



