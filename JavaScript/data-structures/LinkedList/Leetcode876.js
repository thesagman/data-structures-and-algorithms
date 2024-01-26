// Middle of the Linked List
const LinkedList = require('./LinkedList')

const ll1 = new LinkedList()

ll1.InsertFirst(1)
ll1.InsertFirst(2)
ll1.InsertFirst(3)
ll1.InsertFirst(4)
ll1.InsertFirst(5)

var middleNode = function (list) {
    let current = list.head
    let index = Math.floor(list.size / 2)
    let count = 0
    while (current) {
        if(count == index){
            list.head = current;
            return;
        }
        current = current.next;
        count++;
    }

}

middleNode(ll1)
ll1.display()