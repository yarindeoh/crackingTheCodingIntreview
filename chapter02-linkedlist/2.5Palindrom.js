const Node = require('./helpers/Node');

function convert2Str(head) {
    let curr = head;
    let str = "";
    while(curr !== null) {
        str += curr.element;
        curr = curr.next;
    }
    return str;
}

function isPalindrom(input) {
    let str = input.toString();
    return str.split("").join('') === str.split("").reverse().join('');
}

function palindrom(head) {
    let listStr = convert2Str(head);
    return isPalindrom(listStr);
}

function isPalindromeRecursive(str) {
    const len = str.length;
    if (len === 0 || len === 1) {
        return true;
    }
    return str[0] === str[len - 1] && isPalindromeRecursive(str.slice(1, len - 1))
}

const n1 = new Node(0);
const n2 = new Node(1);
const n3 = new Node(2);
const n4 = new Node(1);
const n5 = new Node(0);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

console.log(palindrom(n1));