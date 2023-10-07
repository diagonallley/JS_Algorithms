


//? Queue is a FIFO str => push and shift

let queue = new PriorityQueue();
queue.enqueue("A", 1);
queue.enqueue("E", 2);
queue.enqueue("S", 5);
queue.enqueue("P", 2);
queue.enqueue("O", 1);
queue.enqueue("B", 5);
queue.enqueue("G", 3);
queue.enqueue("H", 6);

console.log(queue.sort());

console.log(queue.dequeue());
console.log(queue);