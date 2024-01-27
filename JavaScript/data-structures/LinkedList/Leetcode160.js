// Intersection of Two Linked Lists
const LinkedList = require('./LinkedList')
const Node = require('./LinkedList')
const NewNode = new Node(8);
console.log(NewNode);
const A = new LinkedList()
A.InsertLast(4)
A.InsertLast(1)
A.InsertLast(NewNode)
A.InsertLast(4)
A.InsertLast(5)
const B = new LinkedList()
B.InsertLast(5)
B.InsertLast(6)
B.InsertLast(1)
B.InsertLast(NewNode)
B.InsertLast(4)
B.InsertLast(5)

var getIntersectionNode = function (headA, headB) {
    let a = headA, b = headB
    while (a !== b) {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a;
};

console.log(getIntersectionNode(A.head, B.head));