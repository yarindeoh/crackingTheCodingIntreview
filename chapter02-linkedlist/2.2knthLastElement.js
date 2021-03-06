const Node = require('./helpers/Node');

function findNthNode(head, n) {
    let count = 0;
    let current = head;
    let nthNode = head;
    while(current.next !== null) {
        count = count + 1;
        current = current.next;
    }
    for(let i = 0; i < count - n; i ++) {
        nthNode = nthNode.next;
    }
    return nthNode.element;
}

let element = {};

function findKthToLast(k, node) {
    if (node === null) {
        return 0;
    }
    let index = findKthToLast(k, node.next) + 1;
    if (k === index){
        console.log('Found element');
        console.log(node);
        element.node = node;
    }
    return index;
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
// const n6 = new Node(6);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
// n5.next = n6;

// console.log(findNthNode(n1, 0));
console.log(findKthToLast(2, n1));
console.log(element);
