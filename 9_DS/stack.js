//? Stack

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;

    }


    push(val) {
        let node = new Node(val);
        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            let currentFirst = this.first;
            this.first = node;
            this.first.next = currentFirst;
        }

        return ++this.size; 
        

    }

    pop() {
        if (this.size === 0) return null;
        var node = this.first;
        if (this.size === 1) {
            this.start = null;
            this.last = null;

        } else {
            let next = node.next;
            this.first = next;
        }
        this.size--;
        return node;
    }
}

let stack = new Stack();
stack.push("one");
stack.push("t");
stack.push("1");

console.log(stack)

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());