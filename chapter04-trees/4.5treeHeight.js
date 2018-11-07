const BST = require('./helpers/BST');

function calcHeight(n) {
    if(n === null) {
        return 0;
    } else if(n.right && n.left) {
        return 1 + Math.max(calcHeight(n.right), calcHeight(n.left));
    } else if(!n.left) {
        return 1 + calcHeight(n.right);
    } else if(!n.right) {
        return 1 + calcHeight(n.left);
    }
}

function findNodeHeight(t) {
    let rightHeight = calcHeight(t.right);
    let leftHeight = calcHeight(t.left);
    return 1 + Math.max(rightHeight, leftHeight);
}

let t1 = new BST(3);
t1.addToBinaryTree(4);
t1.addToBinaryTree(1);
t1.addToBinaryTree(80);
t1.addToBinaryTree(-20);
t1.addToBinaryTree(2);
// console.log(t1);

console.log(findNodeHeight(t1.right));