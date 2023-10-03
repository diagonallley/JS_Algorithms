// collection of nodes => linked list
// piece of data => val
// reference to the next node

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

}


// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// console.log(first);


class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;

    }

    push(val) {
        let node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;

            this.tail = node;
        }
        this.length++;
        return this;


    }

    pop() {
        if (!this.head) {
            return undefined;

        }
        //let node = null;

        let current = this.head;
        let previous = current;

        while (current.next) {
            previous = current;
            current = current.next;


        }
        this.tail = previous;
        this.tail.next = null;
        this.length--;
        //console.log(previous);

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;



    }

    pop_() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        let node = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return node;
    }

    unshift(val) {

        let newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }

        this.length++;

        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return null;
        }

        let counter = 0;
        let current = this.head;
        while (counter !== idx) {

            current = current.next;
            counter++;


        }

        return current;
    }

    set(idx, val) {
        let node = this.get(idx);
        if (!node) {
            return false;

        }
        node.val = val;
        return true;
    }

    insert(idx, value) {
        if (idx === 0) {
            return Boolean(this.unshift(value));
        } else if (idx === this.length) {
            return Boolean(this.push(value));
        } else if (idx < 0 || idx > this.length) {
            return false;
        } else {
            let previousNode = this.get(idx - 1);
            let nodeToInsert = new Node(value);
            let temp = previousNode.next;
            //  ? NODE 0 => NODE 1 => NODE 2 => NODE 3 
            previousNode.next = nodeToInsert;

            nodeToInsert.next = temp;
            this.length++;
            return true;
        }
    }


    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return shift();
        if (idx === this.length - 1) return this.pop();

        let previousNode = this.get(idx - 1); //? retrieving the previous node before the one we want to remove
        let nodeToRemove = previousNode.next; //? Select the node we want to remove

        previousNode.next = nodeToRemove.next; //? Set the next of the previous node to the next of the removed node -Node- => -Removed-node- => -Node-
        this.length--; P
        return nodeToRemove;


    }




    reverse() {
        let current = this.head;
        let previous = null;
        let next = null;
        this.head = this.tail;
        this.tail = current;          //? 1 2 3 4 5 6 7 8 9 
        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }


    }



    reverse2() {
        let current = this.head;
        let previous = null;
        let next = null;
        this.head = this.tail;
        this.tail = current;
        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return this;
    }
    // traverse() {
    //     let current = this.head;
    //     while (current) {
    //         console.log(current.val);
    //         current = current.next;

    //     }
    // }

}

let list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3-wan");
list.push("4-wan");
list.push("5-wan");
list.push("6-wan");
list.push("7-wan");
list.push("8-wan");
list.push("9-wan");

console.log(list)

list.reverse();
console.log(list);
