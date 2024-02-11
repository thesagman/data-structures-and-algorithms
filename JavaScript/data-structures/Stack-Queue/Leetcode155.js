// Min Stack

class MinStack {
    minArray = [];
    constructor() {
        this.items = [];
        this.count = 0;
    }
    push(val) {
        if (this.minArray.length == 0 || val <= this.minArray[this.minArray.length - 1]) {
            this.minArray.push(val)
        }
        this.items.push(val);
        this.count++;
    }
    pop() {
        if (this.items[this.items.length - 1] === this.minArray[this.minArray.length - 1]) {
            this.minArray.pop()
        }
        this.items.pop()
        this.count--;
    }
    top() {
        return this.items[this.count - 1]
    }
    getMin() {
        return this.minArray[this.minArray.length - 1]

    }
}

const minstack = new MinStack()
minstack.push(0);
minstack.push(1);
minstack.push(0);
console.log(minstack.getMin());
console.log(minstack);
