const Node = require('./helpers/Node');
const PrintList = require('./helpers/PrintList');

function sumOfLists(node1, node2, carry = 0){
    if(!node1 && !node2 && carry === 0){
        return null
    }
    let value = carry;
    if(node1 && node1.element) {
        value += node1.element;
    }
    if(node2 && node2.element) {
        value += node2.element;
    }
    node1 = node1.next;
    node2 = node2.next;
    const sumList  = new Node(value % 10);

    //recursive call
    sumList.next = sumOfLists(node1, node2, value >= 10 ? 1 : 0);

    return sumList;
}

const n1 = new Node(3);
const n2 = new Node(1);
const n3 = new Node(5);

n1.next = n2;
n2.next = n3;

const n4 = new Node(5);
const n5 = new Node(9);
const n6 = new Node(2);

n4.next = n5;
n5.next = n6;

PrintList(n1);
PrintList(n4);
console.log('after sum =>>>>');

const sum = sumOfLists(n1, n4);
PrintList(sum);
