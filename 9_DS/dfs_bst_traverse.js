//? Depth First Search

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

    traverseBFS() {
        let queue = [];
        let returnArr = [];

        queue.push(this.root);
        let dequeuedEl = this.root;
        while (queue.length) {
            dequeuedEl = queue.shift();
            returnArr.push(dequeuedEl);
            if (dequeuedEl.left) {
                queue.push(dequeuedEl.left);
            } if (dequeuedEl.right) {
                queue.push(dequeuedEl.right);
            }

        }

        return returnArr;
    }

    traverseDFS() { //* PreOrder
        let returnArr = [];
        let current = this.root;

        let innerTraverse = function (node) {
            returnArr.push(node);
            if (node.left) innerTraverse(node.left);
            if (node.right) innerTraverse(node.right);

        }
        innerTraverse(current);
        return returnArr;
    }


}

let tree = new BinarySearchTree();
tree.insert(13);
tree.insert(22);
tree.insert(14);
tree.insert(17);
tree.insert(37);


// console.log(tree);

tree.traverseDFS().forEach((el) => {
    console.log(el.value);
});

console.log("check the difference ")

tree.traverseBFS().forEach((el) => {
    console.log(el.value);
});

