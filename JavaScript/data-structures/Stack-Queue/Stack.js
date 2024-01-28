class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
        return this.count - 1;
    }
    pop() {
        if (this.count == 0) {
            return undefined;
        }
        let deletedItem = this.items[this.count - 1]
        this.count = this.count - 1
        return deletedItem
    }

    peek() {
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count == 0;
    }

    size() {
        return this.size;
    }

    clear() {
        this.items = []
        this.count = 0;
        return this.items;
    }

    print() {
        if (this.count == 0) {
            return null;
        }
        while (this.count) {
            console.log(this.items[this.count - 1]);
            this.count--;
        }
    }
}

const s = new Stack()
s.push(100)
s.push(200)
s.push(300)
s.pop()
s.pop()
s.pop()
s.clear()
console.log(s);
s.print()
// console.log(s.isEmpty());
// console.log(s.peek()); 