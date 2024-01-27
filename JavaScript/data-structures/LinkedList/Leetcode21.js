// Merge Two Sorted Lists
const LinkedList = require('./LinkedList')

const List1 = new LinkedList()
const List2 = new LinkedList()
List1.InsertLast(1)
List1.InsertLast(3)
List1.InsertLast(5)
List2.InsertLast(1)
List2.InsertLast(2)
List2.InsertLast(9)
List2.InsertLast(14)


var mergeTwoLists = function (List1, List2) {
    let list1 = List1.head
    let list2 = List2.head
    const list3 = new LinkedList()

    while (list1 && list2) {
        if (list1.data < list2.data) {
            list3.InsertLast(list1.data)
            list1 = list1.next;
        } else {
            list3.InsertLast(list2.data)
            list2 = list2.next;
        }
    }
    while (list1) {
        list3.InsertLast(list1.data)
        list1 = list1.next;
    }
    while (list2) {
        list3.InsertLast(list2.data)
        list2 = list2.next;
    }
    return list3

};

const list3 = mergeTwoLists(List1, List2)
list3.display()
