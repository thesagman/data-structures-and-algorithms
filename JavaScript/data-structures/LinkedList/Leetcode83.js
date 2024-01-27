// Remove Duplicates from Sorted List
const LinkedList = require('./LinkedList')

const A = new LinkedList()
A.InsertLast(1)
A.InsertLast(1)
A.InsertLast(2)
A.InsertLast(3)
A.InsertLast(3)
A.InsertLast(3)


var deleteDuplicates = function (head,list) {
    if (head === null || head.next === null) {
        return head;
    }
    let current = head;
    let next = head.next;
    while (next) {
        if (current.data == next.data) {
            current.next = next.next;
            next = next.next;
            list.size--;
        } else {
            current = current.next;
            next = next.next;
        }
    }
    return head;
};

deleteDuplicates(A.head,A)
A.display()
