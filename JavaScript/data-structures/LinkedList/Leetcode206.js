// Reverse Linked List
const LinkedList = require('./LinkedList')

const ll1 = new LinkedList()

ll1.InsertFirst(1);
ll1.InsertFirst(2);
ll1.InsertFirst(3);
ll1.InsertFirst(4);
ll1.InsertFirst(5);
var reverseList = function (list) {
    if (list.size < 2) {
        return;
    }
    let present = list.head;
    let next = list.head.next;
    let prev;
    while (present) {
        present.next = prev;
        prev = present
        present = next;
        if (next != null) {
            next = next.next;
        }
        list.head = prev;
    }
};

reverseList(ll1)
ll1.display()