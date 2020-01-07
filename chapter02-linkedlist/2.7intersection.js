const lengthList = require('./helpers/lengthOfList');
const Node = require('./helpers/Node');
const PrintList = require('./helpers/PrintList');

/**
 * Time complexity is o(l1 + l2) which is o(n)
 * space complexity is also good, no additional params were added
 * @param l1
 * @param l2
 * @returns {boolean}
 */
function compareEqualLists(l1, l2) {
    PrintList(l1);
    PrintList(l2);
    while(l1.next !== null && l2.next !== null) {
        l1 = l1.next;
        l2 = l2.next;
        if(l1 === l2) {
            return true;
        }
    }
    return false;
}

function goToIndexList(node, index) {
    while(index > 0) {
        node = node.next;
        index --;
    }
    return node;
}

/**
 * Cut off length of 2 lists if its not equal
 * @param l1
 * @param l2
 * @returns {boolean}
 */
function intersectionLists(l1, l2) {
    const length1 = lengthList(l1);
    const length2 = lengthList(l2);
    if(length1 > length2) {
        l1 = goToIndexList(l1, length1 - length2);
    } else if(length1 < length2) {
        l2 = goToIndexList(l2, length2 - length1);
    }
        return compareEqualLists(l1, l2);
}


const l1n1 = new Node(1);
const l1n2 = new Node(2);
const l1n3 = new Node(3);
const l1n4 = new Node(4);
const l1n5 = new Node(5);

l1n1.next = l1n2;
l1n2.next = l1n3;
l1n3.next = l1n4;
l1n4.next = l1n5;


const l2n1 = new Node(1);
// const l2n2 = new Node(3);
// const l2n1 = l1n1;
l2n1.next = l1n2;

// PrintList(l1n1);
// PrintList(l2n1);

console.log(intersectionLists(l1n1, l2n1));