// Remove Linked List Elements
const LinkedList = require('./LinkedList')

const A = new LinkedList()
A.InsertLast(1)
A.InsertLast(2)
A.InsertLast(6)
A.InsertLast(3)
A.InsertLast(4)
A.InsertLast(5)
A.InsertLast(6)

// A.InsertLast(7)
// A.InsertLast(7)
// A.InsertLast(7)
// A.InsertLast(7)



var removeElements = function (head, val) {
    while (head && head.data == val) {
        head = head.next;
    }

    if (!head) {
        return null;
    }
    let current = head;
    let prev;
    while (current) {
        if (current.data == val) {
            if (prev) {
                prev.next = current.next
            }
            current = current.next;
        } else {
            prev = current;
            current = current.next;
        }
    }
    return head;
};

removeElements(A.head, 6);
A.display()