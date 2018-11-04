const Node = require('./helpers/Node');
const PrintList = require('./helpers/PrintList');

function removeMiddle(node) {
    let curr = node;
    while(curr && curr.next) {
        curr.element = curr.next.element;
        if (curr.next.next === null) {
            curr.next = null;
        }
        curr = curr.next;
    }
}

const n1 = new Node('a');
const n2 = new Node('b');
const n3 = new Node('c');
const n4 = new Node('d');
const n5 = new Node('e');
const n6 = new Node('t');

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;

PrintList(n1);
removeMiddle(n2);
PrintList(n1);