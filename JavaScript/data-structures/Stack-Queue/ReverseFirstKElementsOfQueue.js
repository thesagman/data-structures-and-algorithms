// Reverse First K elements of Queue

class Queue {
    constructor() {
        this.items = [];
    }
    push(element) {
        return this.items.push(element);
    }
    pop() {
        if (this.items.length > 0) {
            return this.items.shift();
        }
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    size() {
        return this.items.length;
    }
}
function reverseFirstK(queue, k) {
    let stack = []
    if (queue.isEmpty() == true || k > queue.size() || k <= 0) {
        return;
    }

    for (let i = 0; i < k; i++) {
        stack.push(queue.front())
        queue.pop()
    }
    while (!stack.length == 0) {
        queue.push(stack[stack.length - 1])
        stack.pop()
    }
    for (let i = 0; i < queue.size() - k; i++) {
        queue.push(queue.front())
        queue.pop();
    }
    return queue;
}




let queue = new Queue();
queue.push(6);
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
let k = 3;
console.log(reverseFirstK(queue, k));
