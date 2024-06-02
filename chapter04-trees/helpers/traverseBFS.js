const Tree = require('./Tree');

function traverseBFS(node) {
    if(!node.right && !node.left) return;
    console.log(node.left.value);
    console.log(node.right.value);
    traverseBFS(node.left);
    traverseBFS(node.right);
}

let t1 = new Tree(9);
t1.left = new Tree(6);
t1.right = new Tree(12);
t1.left.left = new Tree(1);
t1.left.right = new Tree(4);
t1.right.right = new Tree(45)
t1.right.left = new Tree(34);

// console.log(t1);
traverseBFS(t1);
