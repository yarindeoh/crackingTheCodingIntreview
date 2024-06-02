const Tree = require('./Tree');

// pre order
function traverseDFS(node) {
    if(!node.right && !node.left) {
        console.log(node.value);
        return;
    }
    console.log(node.value);
    traverseDFS(node.left);
    traverseDFS(node.right);
}

// play with the order to get left -> right -> root and all permutations
function postOrder(node) {
    if(!node.left && !node.right) {
        console.log(node.value);
        return;
    }
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
}

let t2 = new Tree(9);
t2.left = new Tree(6);
t2.right = new Tree(12);
t2.left.left = new Tree(1);
t2.left.right = new Tree(4);
t2.right.right = new Tree(45)
t2.right.left = new Tree(34);


let t3 = new Tree(9);
let t4 = new Tree(4);
let t5 = new Tree(20);

t4.right = new Tree(6)
t4.left = new Tree(1)
t3.left = t4;
t5.right = new Tree(170);
t5.left = new Tree(15);
t3.right = t5;
// console.log(t2);
// traverseDFS(t2);
postOrder(t3);
