// Intersection of Two Linked Lists
const LinkedList = require('./LinkedList')



const A = new LinkedList()
A.InsertLast(4)
A.InsertLast(1)
// A.InsertLast(commonNode.data)
A.InsertLast(4)
A.InsertLast(5)
const B = new LinkedList()
B.InsertLast(5)
B.InsertLast(6)
B.InsertLast(1)
// B.InsertLast(commonNode.data)
B.InsertLast(4)
B.InsertLast(5)

const commonNode = { data: 8, next: null };

// Set the common node as the next node for the last node in list A
let lastNodeA = A.head;
while (lastNodeA.next !== null) {
    lastNodeA = lastNodeA.next;
}
lastNodeA.next = commonNode;

// Set the common node as the next node for the last node in list B
let lastNodeB = B.head;
while (lastNodeB.next !== null) {
    lastNodeB = lastNodeB.next;
}
lastNodeB.next = commonNode;


var getIntersectionNode = function (headA, headB) {
    let a = headA, b = headB
    while (a !== b) {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a;
};

console.log(getIntersectionNode(A.head, B.head));