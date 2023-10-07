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

    removeVertex2(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    dfsRecursive(vertex = "A") {
        let returnArr = [];
        let visited = {};
        let self = this;

        let innerFunction = function (vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            returnArr.push(vertex);



            self.adjacencyList[vertex].forEach((v) => {
                if (!visited[v]) {
                    return innerFunction(v);
                }
            });
        }

        innerFunction(vertex);

        return returnArr;
    }
    dfsIterative(vertex) {
        let stack = [];
        let returnArr = [];
        let visited = {};
        stack.push(vertex);
        //visited[vertex] = true;
        while (stack.length) {
            let v = stack.pop();
            if (!visited[v]) {
                visited[v] = true;
                returnArr.push(v);
                this.adjacencyList[v].forEach((el) => {
                    stack.push(el);
                });
            }
        }
        return returnArr;
    }

    bfsTreverse(vertex) {
        let queue = [vertex];
        let returnArr = [];
        let visited = {};

         visited[vertex] = true;

        while (queue.length) {
            let v = queue.shift();
            returnArr.push(v);

            this.adjacencyList[v].forEach((el) => {
                if (!visited[el]) {
                    visited[el] = true;
                    queue.push(el);
                }
            });
        }
        return returnArr;

    }
}

let g = new Graph();


g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

// console.log(g.adjacencyList["A"])
console.log(g.dfsRecursive("A"))
console.log("------------");
console.log(g.dfsIterative("A"))
console.log(g.bfsTreverse("A"))