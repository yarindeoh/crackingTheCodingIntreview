const Node = require('./helpers/Node');

function findInfitLoop(h1) {
    let p1 = h1;
    let p2 = h1;
    let head = h1;
    while(p1.next !== null){
        p1 = p1.next;
        p2 = p2.next.next;
        if(p1 === p2) break;
    }
    while(head !== p2) {
        head = head.next;
        p2 = p2.next;
    }
    return head;
}

const n1 = new Node('A');
const n2 = new Node('B');
const n3 = new Node('C');
const n4 = new Node('D');
const n5 = new Node('E');

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n3;

findInfitLoop(n1);
