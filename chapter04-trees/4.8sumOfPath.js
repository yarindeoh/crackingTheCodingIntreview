const BST = require('./helpers/BST');
const printByLevel = require('./4.4printByLevel');

/**
 * approach 1
 * @param lT
 * @param sT
 */
function isSubtree(lT, sT) {

}

let t1 = new BST(3);
t1.addToBinaryTree(4);
t1.addToBinaryTree(1);
t1.addToBinaryTree(80);
t1.addToBinaryTree(-20);
t1.addToBinaryTree(2);
// console.log(t1);

printByLevel(t1);
