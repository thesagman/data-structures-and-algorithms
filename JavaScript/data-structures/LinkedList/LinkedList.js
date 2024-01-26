class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert First Node
    InsertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++;
    }
    // Insert Last Node
    InsertLast(data) {
        if (this.head == null) {
            return this.InsertFirst(data);
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(data)
        this.size++;
    }

    InsertAtIndex(data, index) {
        if (index == 0) {
            return this.InsertFirst(data);
        }
        if (index == this.size) {
            return this.InsertLast(data)
        }
        if (index < 0 && index > this.size) {
            return;
        }
        const node = new Node(data)
        let current = this.head;
        let prev;
        let count = 0;
        while (current) {
            if (count == index) {
                prev.next = node
                node.next = current;
                this.size++;
            }
            prev = current;
            current = current.next;
            count++;
        }
    }

    // Print the Nodes
    display() {
        if (this.head == null) {
            return;
        }
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Get At Index
    GetAtIndex(index) {
        let current = this.head;
        let count = 0;
        if (index < 0 && index > this.size) {
            return;
        }
        while (current) {
            if (count == index) {
                console.log(`Here's your element : ${current.data}`);
            }
            current = current.next
            count++;
        }
    }

    // Remove at index
    RemoveAtIndex(index) {
        let current = this.head;
        let prev;
        let count = 0;
        if (index < 0 && index > this.size) {
            return;
        }
        if (index === 0) {
            this.head = current.next;
            return;
        }

        while (current) {
            if (count === index) {
                prev.next = current.next;
                this.size--;
                return;
            }
            prev = current;
            current = current.next;
            count++;
        }
    }

    // Clear the Whole List
    clear() {
        this.head = null;
        this.size = 0;
    }

    // Remove the First element
    deleteFirst() {
        this.head = this.head.next;
        this.size--;
        return;
    }

    // Remove the Last element
    deleteLast() {
        let current = this.head;
        let prev;
        while (current.next) {
            prev = current;
            current = current.next;
            this.size--;
        }
        prev.next = null;
        return;
    }

    // Remove the element
    delete(data) {
        let current = this.head;
        if (current.data === data) {
            return this.deleteFirst(data);
        }
        let prev;
        while (current) {
            if (current.data === data) {
                prev.next = current.next;
                this.size--;
                return;
            }
            prev = current;
            current = current.next;
        }
    }



}
if (require.main === module) {
const ll = new LinkedList()
ll.InsertFirst(1);
ll.InsertFirst(2);
ll.InsertFirst(3);
ll.InsertLast(0)
// ll.InsertAtIndex(2.5, 1)
// ll.InsertAtIndex(4, 0)
// ll.InsertAtIndex(.05, 5)
// ll.RemoveAtIndex(2)
// ll.RemoveAtIndex(0)
// ll.clear()
// console.log(ll);
// ll.deleteFirst()
// ll.deleteLast()
// ll.delete(2)
// ll.delete(0)
ll.deleteFirst()
ll.delete(2)

ll.display()

// ll.GetAtIndex(5);
console.log(`This Size of the List is ${ll.size}`);
}

module.exports = LinkedList;