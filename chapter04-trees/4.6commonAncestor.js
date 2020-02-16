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
 * @type {Tree/BST}
 */

// let t1 = new BST(3);
// t1.addToBinaryTree(4);
// t1.addToBinaryTree(1);
// t1.addToBinaryTree(80);
// t1.addToBinaryTree(-20);
// t1.addToBinaryTree(2);
// // console.log(t1);

// // console.log(isExist(t1, 3));
// console.log(commonAnsector(t1, t1.right.right, t1.right).data);

let b3 = new Tree(3);
let b2 = new Tree(2);
let b8 = new Tree(8);
let b4 = new Tree(4);
let b9 = new Tree(9);
let b1 = new Tree(1);
let b5 = new Tree(5);
let b7 = new Tree(7);
let b6 = new Tree(6);

b3.right = b8;
b3.left = b2;
b2.right = b6;
b2.left = b4;
b8.right = b1;
b8.left = b9;
b1.right = b7;
b1.left = b5;

console.log(commonAnsector(b3, b7, b9)); //b8

