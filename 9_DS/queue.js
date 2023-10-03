//? Queue

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;

    }

    enqueue(val) {
        let node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;

        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;


    }

    dequeue() {
        if (!this.first) {
            return null;
        }

        let node = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {

            let next = this.first.next;
            node.next = null;
            this.first = next;
        }
        this.size--;
        return node.val;

    }
}

//* Enqueue => Add to the end
//* Dequeue => Remove from the beginning


let queue = new Queue();
console.log(queue.enqueue("First"));
queue.enqueue("Second");
queue.enqueue("Third");
queue.enqueue("Fourth");
queue.enqueue("Fifth");

console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.enqueue("First"));
console.log(queue.enqueue("Second"));

console.log(queue);