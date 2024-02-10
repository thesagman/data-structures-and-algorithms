// Valid Parentheses
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    print() {
        console.log(this.items.toString());
    }
}
let s = "()[]{}"

var isValid = function (s) {
    let stack = new Stack()
    const bracketsMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (stack.isEmpty() || stack.peek() !== bracketsMap[char]) {
                return false;
            }
            stack.pop();
        }
    }


    return stack.isEmpty();
};

console.log(isValid(s));