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
 * it takes o(n) but a Set with o(n) space
 * @param node
 */
function removeDup(node) {
    let hash = new Set();
    let prev = new Node(null);
    while(node !== null) {
       if(hash.has(node.element)) {
           prev.next = node.next;
       } else {
           hash.add(node.element);
           prev = node;
       }
       node = node.next;
    }
}

/**
 * Removing dups in place o(n) space, o(n2) time
 * @param head
 */
function removeDupsInPlace(head) {
    let current = head;
    while(current !== null) {
        let runner = current;
        while(runner.next !== null) {
            if(runner.next.element === current.element) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        current = current.next;
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
removeDupsInPlace(n1);
// removeDupFromSorted(n1);
PrintList(n1);