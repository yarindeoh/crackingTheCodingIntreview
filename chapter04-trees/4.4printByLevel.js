const BST = require('./helpers/BST');

/**
 * 
 * @param t
 */
function printTree(t) {
    if(t === null) {
        return;
    } else {
        if(!t.right && !t.left) {
            return;
        } else if(t.right && t.left) {
            console.log(t.right.data);
            console.log(t.left.data);
            printTree(t.right);
            printTree(t.left);
        } else if(!t.right) {
            console.log(t.left.data);
            printTree(t.left);
        } else if(!t.left) {
            console.log(t.right.data);
            printTree(t.right);
        }
    }
}

function printByLevel(t) {
    console.log(t.data);
    printTree(t);
}
let t1 = new BST(3);
t1.addToBinaryTree(4);
t1.addToBinaryTree(1);
t1.addToBinaryTree(80);
t1.addToBinaryTree(-20);
t1.addToBinaryTree(2);
// console.log(t1);
// printByLevel(t1);

module.exports = printByLevel;