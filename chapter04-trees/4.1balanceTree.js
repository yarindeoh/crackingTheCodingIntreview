const BST = require('./helpers/BST');

/**
 * Time complexity of o(n) 
 * @param {node} t 
 */
function findTreeHeight(t) {
    if(!n.right && !n.left) {
        return 0;
    } else if(!n.right && n.left) {
        return 1 + findTreeHeight(n.left);
    } else if(!n.left && n.right) {
        return 1 + findTreeHeight(n.right);
    } else {
        return 1 + findTreeHeight(n.right) + findTreeHeight(n.left);
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

// Also works on regular binary tree