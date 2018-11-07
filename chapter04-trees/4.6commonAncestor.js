const BST = require('./helpers/BST');

function commonAnsector(t, n1, n2) {
    if(isExist(t.left, n1) && isExist(t.left, n2)) {
        return commonAnsector(t.left, n1, n2)
    } else if(isExist(t.right, n1) && isExist(t.right, n2)) {
        return commonAnsector(t.right, n1, n2)
    }
    return t;
}

function isExist(t, node) {
    if(t === null ) {
        return false;
    } else if(t === node) {
        return true;
    }
    return isExist(t.right, node) || isExist(t.left, node);
}

/**
 * improvement can be done when holding flags
 * and monitoring if the 2 nodes are from the same direction
 * @type {BST}
 */

let t1 = new BST(3);
t1.addToBinaryTree(4);
t1.addToBinaryTree(1);
t1.addToBinaryTree(80);
t1.addToBinaryTree(-20);
t1.addToBinaryTree(2);
// console.log(t1);

// console.log(isExist(t1, 3));
console.log(commonAnsector(t1, t1.right.right, t1.right).data);