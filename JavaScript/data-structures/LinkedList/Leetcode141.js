// Linked List Cycle
const LinkedList = require('./LinkedList')

const A = new LinkedList()
A.InsertLast(3)
A.InsertLast(2)
A.InsertLast(0)
A.InsertLast(-4)


var hasCycle = function (head) {
    let fast = head
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            return true;
        }
    }
    return false;
};

console.log(hasCycle(A.head));