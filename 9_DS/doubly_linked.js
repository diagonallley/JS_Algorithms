class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;

    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;

        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        let nodeToRemove = this.tail;
        if (this.length === 1) {

            this.tail = null;
            this.head = null;


        } else {

            let newLast = nodeToRemove.prev;
            nodeToRemove.prev = null;
            this.tail = newLast;
            this.tail.next = null;


        }


        this.length--;

        return nodeToRemove;




    }

    shift() {
        if (!this.head) {
            return undefined
        }
        let nodeToRemove = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;

        } else {
            this.head = nodeToRemove.next;
            this.head.prev = null;
            nodeToRemove.next = null;
        }

        this.length--;
        return nodeToRemove;

    }
    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return null;
        }

        let half = Math.floor(this.length / 2);

        var current = idx <= half ? this.head : this.tail;
        let fromHead = idx <= half ? true : false;
        var count = idx <= half ? 0 : this.length - 1;
        while (count != idx) {
            if (fromHead) {
                current = current.next;
                count++;
            } else {
                current = current.prev;
                count--;

            }

        }
        return current;
    }

    newGet(idx) {
        if (idx < 0 || idx >= this.length) return null;

        var count, current;
        if (idx <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count != idx) {
                current = current.next;
                count++;

            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== idx) {
                current = current.prev;

                count--;
            }
        }
        return current;
    }

    set(idx, val) {
        let node = this.get(idx);
        if (node) {
            node.val = val
            return true;
        }
        return false;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return Boolean(this.unshift(val));
        if (idx === this.length) return Boolean(this.push(val));

        let nodeBefore = this.get(idx - 1);
        let insertNode = new Node(val);
        let nodeAfter = nodeBefore.next;

        nodeBefore.next = insertNode, insertNode.prev = nodeBefore;
        insertNode.next = nodeAfter, nodeAfter.prev = insertNode;



        this.length++;
        return true;

    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) return null;
        if (idx === 0) return this.shift(idx);
        if (idx === this.length - 1) return this.pop(idx);

        let nodeToRemove = this.get(idx);
        let nodeAfter = nodeToRemove.next;
        let nodeBefore = nodeToRemove.prev;

        nodeToRemove.prev = null;
        nodeToRemove.next = null;

        nodeBefore.next = nodeAfter;
        nodeAfter.prev = nodeBefore;

        this.length--;

        return nodeToRemove;


    }

    reverse() {
        let current = this.head;

        while (current != null) {
            let temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = current.prev;
        }

        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        return this;
    }

}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(5);
list.push(6);

list.reverse();

console.log(list)

