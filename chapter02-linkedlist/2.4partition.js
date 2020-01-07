const Node = require('./helpers/Node');
const PrintList = require('./helpers/PrintList');

function add(head, element){
    let node = new Node(element);
    if(head === null){
        head = node;
    } else {
        let currentNode = head;
        while(currentNode.next){
            currentNode  = currentNode.next;
        }
        currentNode.next = node;
    }
}

function partition(head, partition) {
    let more = new Node();
    let less = new Node();
    let curr = head;
    while(curr !== null) {
        if(curr.element >= partition) {
            add(more, curr.element);
        } else {
            add(less, curr.element);
        }
        curr = curr.next;
    }
    let c = less;
    while(c.next !== null) {
        c = c.next;
    }
    c.next = more;
    PrintList(less);
}

const n1 = new Node(3);
const n2 = new Node(5);
const n3 = new Node(8);
const n4 = new Node(10);
const n5 = new Node(2);
const n6 = new Node(1);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;

partition(n1, 5);