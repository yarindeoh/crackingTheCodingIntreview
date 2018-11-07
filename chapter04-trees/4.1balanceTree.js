const BST = require('./helpers/BST');

function findTreeHeight(t) {
    if(!t.right && !t.left) {
        return 0;
    } else if(!t.right && t.left) {
        return 1 + findTreeHeight(t.left);
    } else {
        return 1 + findTreeHeight(t.right);
    }
}

function isTreeBalanced(t) {
    const left = 1 + findTreeHeight(t.left);
    const right = 1 + findTreeHeight(t.right);
    console.log(left);
    console.log(right);

    return left === right;
}

let t1 = new BST(3);
t1.addToBinaryTree(4);
t1.addToBinaryTree(1);
t1.addToBinaryTree(80);
t1.addToBinaryTree(-20);
// console.log(t1);
console.log(isTreeBalanced(t1));