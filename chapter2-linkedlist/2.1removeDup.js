const Node = require('./helpers/Node');
const PrintList = require('./helpers/PrintList');

/**
 * when list is sorted
 * @param head
 * @returns {number}
 */
function removeDupFromSorted(head) {
    let curr = head;
    if(!curr) return -1;
    while(curr) {
        if(curr && curr.next && (curr.element === curr.next.element)) {
            let next = curr.next;
            curr.next = next.next;
        } else {
            curr = curr.next;
        }
    }
}

/**
 * when unsorted list
 * @param head
 */
function removeDup(head) {
    let values = mapLinkToValues(head);
    let curr = head;
    while(curr) {
        if(values.includes(curr.element)) {

        }
    }
}

const n1 = new Node(1);
const n2 = new Node(1);
const n3 = new Node(1);
const n4 = new Node(2);
const n5 = new Node(2);
const n6 = new Node(3);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;

PrintList(n1);
removeDupFromSorted(n1);
PrintList(n1);