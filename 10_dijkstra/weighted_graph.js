// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }

//     enqueue(val, p) {
//         this.values.push({ val, priority: p });
//         this.sort();
//     }

//     dequeue() {
//         return this.values.shift();
//     }

//     sort() {
//         this.values.sort((a, b) => {
//             return a.priority - b.priority; // ? ascending
//         });
//     }
// }

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let node = new Node(val, priority)
        this.values.push(node)
        if (this.values.length === 1) return this.values;
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        let parentValue = this.values[parentIndex].priority;
        let childValue = priority;

        while (childValue <= parentValue) {
            swap(this.values, parentIndex, index);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
            if (parentIndex < 0 || index === 0) break;

            parentValue = this.values[parentIndex].priority;
            childValue = this.values[index].priority;
        }
        return this.values;
    }

    dequeue() {

        // swap(this.values, 0, this.values.length - 1);
        // let max = this.values.pop();
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            // ? Trickle Down

            this.sinkDown();

        }


        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[idx];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority < element.priority)
                    || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;

            idx = swap;

        }
    }





}
function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

}
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
        //this.insertTime = Date.now();
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, w) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight: w });

        this.adjacencyList[vertex2].push({ node: vertex1, weight: w });

    }

    shortestPath(start, end) {
        let distances = {};
        let previous = {};
        let queue = new PriorityQueue();
        let path = [];
        let currentVertex
        for (let key in this.adjacencyList) {
            if (key === start) {
                distances[key] = 0;
                queue.enqueue(key, 0);
            } else {
                distances[key] = Infinity;

                queue.enqueue(key, Infinity);
            }
            previous[key] = null;
        }

        while (queue.values.length) {

            currentVertex = queue.dequeue().val;

            if (currentVertex === end) {
                // console.log(distances);
                // console.log(previous);
                while (previous[currentVertex]) {
                    path.push(currentVertex);
                    currentVertex = previous[currentVertex];
                }
                break;
            }

            if (currentVertex || distances[currentVertex] !== Infinity) {
                // this.adjacencyList[currentVertex].forEach(el => {
                //     console.log();
                // });
                for (let neighbour in this.adjacencyList[currentVertex]) {
                    let nextNode = this.adjacencyList[currentVertex][neighbour];
                    //console.log(nextNode);

                    //? calculate new distance to neighbouring node
                    let candidate = distances[currentVertex] + nextNode.weight;
                    let nextNeighbour = nextNode.node;

                    if (candidate < distances[nextNeighbour]) {
                        // updating new smallest distance 
                        distances[nextNeighbour] = candidate;
                        // updating previous- How we got to the next npde
                        previous[nextNeighbour] = currentVertex;

                        //enqueue in priority queue with new priority
                        queue.enqueue(nextNeighbour, candidate);
                    }
                }

            }
        }

        path.push(currentVertex);
        return path.reverse();


    }

}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);


console.log(graph.shortestPath("A", "E"));

// ["A", "C", "D", "F", "E"]




//? Queue is a FIFO str => push and shift



