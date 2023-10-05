//? MaxBinaryHeap

function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

}

class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(val) {
        this.values.push(val);
        if (this.values === 1) return this.values;
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        let parentValue = this.values[parentIndex];
        let childValue = val;

        while (childValue > parentValue) {
            swap(this.values, index, parentIndex);
            //console.log(this.values);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
            if (parentIndex < 0 || index === 0) break;
            parentValue = this.values[parentIndex];
            childValue = val;


        }

        return this.values;
    }

    extractMax() {

        // swap(this.values, 0, this.values.length - 1);
        // let max = this.values.pop();
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            // ? Trickle Down

            this.sinkDown();

        }


        return max;
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
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element)
                    || (swap !== null && rightChild > leftChild)) {
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






let heap = new MaxBinaryHeap();
console.log(heap.insert(55));


console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
heap.insert(99)
heap.insert(10)
console.log(heap);