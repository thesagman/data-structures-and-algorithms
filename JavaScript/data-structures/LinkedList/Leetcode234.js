// Palindrome Linked List
const LinkedList = require('./LinkedList')
const list = new LinkedList();
list.InsertLast(1);
list.InsertLast(2);
list.InsertLast(3);
list.InsertLast(2);
list.InsertLast(1);

const findMiddle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

const reverseList = function(head) {
    let prev = null;
    let current = head;
    while (current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;
};

var isPalindrome = function (head) {
    let middle = findMiddle(head)
    let reversedHalf = reverseList(middle);
    let firstHalf = head;
    while (reversedHalf) {
        if (firstHalf.val !== reversedHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        reversedHalf = reversedHalf.next;
    }
    return true;
};

console.log(isPalindrome(list.head));
