// Convert Binary Number in a Linked List to Integer
const LinkedList = require('./LinkedList');

const ll1 = new LinkedList()
ll1.InsertFirst(0);
ll1.InsertFirst(1);
ll1.InsertFirst(1);

var getDecimalValue = function (list) {
    if (!list || !list.head) {
        return 0;
    }
    let current = list.head;
    let answer = 0;
    while (current) {
        answer = answer * 2 + current.data;
        current = current.next;
    }
    return answer;
};

console.log(getDecimalValue(ll1));