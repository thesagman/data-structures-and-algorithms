// Delete Node in a Linked List
const LinkedList = require('./LinkedList')

const List1 = new LinkedList()

List1.InsertLast(4)
List1.InsertLast(5)
List1.InsertLast(1)
List1.InsertLast(9)

var deleteNode = function (node) {
    let current = List1.head
    let prev;
    while (current) {
        if (current.data == node) {
            prev.next = current.next;
            List1.size--;
            return
        }
        prev = current;
        current = current.next
    }


};

deleteNode(1)
List1.display()