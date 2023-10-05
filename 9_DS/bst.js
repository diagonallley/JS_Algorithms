//? Binary Search Tree

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;

        } else {
            let current = this.root;
            while (true) {
                if (val === current.value) return null;
                if (val < current.value) {
                    if (current.left === null) {
                        current.left = node;
                        return this;
                    }
                    current = current.left;

                } else if (val > current.value) {
                    if (current.right === null) {
                        current.right = node;
                        return this;
                    }
                    current = current.right;

                }
            }
        }
    }

    find(val) {
        if (!this.root) return false;
        let current = this.root;


        while (true) {
            if (current.value === val) return true;
            if (val > current.value) {
                if (current.right) {
                    current = current.right;
                } else {
                    return false;
                }
            } else if (val < current.value) {
                if (current.left) {
                    current = current.left;

                } else {
                    return false;
                }

            }

        }

    }

    find2(val) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;

        while (current && !found) {
            if (val < current.value) {

                current = current.left;

            } else if (val > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }

        return found ? current : false;
    }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);


tree.insert(13);
tree.insert(22);
tree.insert(14);
tree.insert(17);
tree.insert(37);

console.log(tree.find(38));
console.log(tree);

console.log("------------");

console.log(tree.find2(37));