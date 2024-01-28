class Queue {
    constructor() {
        this.items = []
        this.count = 0;
        this.ptr = -1;
    }

    enqueue(element) {
        this.items[this.count] = element
        this.count++;
    }
    dequeue() {
        if (this.count == 0) {
            this.ptr = -1;
            return null;
        }
        const deletedItem = this.items[this.ptr + 1];
        this.ptr++;
        this.count--;
        return deletedItem;
    }
    isEmpty() {
        return this.count == 0;
    }

    front() {
        return this.items[this.ptr + 1];
    }
    size() {
        return this.count;
    }
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.dequeue()
q.dequeue()
// console.log(q.front());
console.log(q.size());
// console.log(q.front());
// console.log(q.isEmpty());
// console.log(q.ptr);
// console.log(q.dequeue());