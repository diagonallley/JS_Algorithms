class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
        //this.insertTime = Date.now();
    }
}

//? minBinaryHeap is where the root is the smallest element
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

let er = new PriorityQueue();
er.enqueue("common cold", 5);
er.enqueue("gunshot wound", 1);
er.enqueue("high fever", 4);
er.enqueue("broken arm", 2);
er.enqueue("glass in foot", 3);

console.log(er);

console.log(er.dequeue());
console.log(er.dequeue());
console.log(er.dequeue());
console.log(er.dequeue());
console.log(er.dequeue());