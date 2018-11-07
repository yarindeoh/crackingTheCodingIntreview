const Tree = require('./helpers/Tree');

function isSame(tree1, tree2) {
    let answer = tree1.value === tree2.value;
    if (!answer) { return answer; }

    if (tree1.left !== null && tree2.left !== null) {
        answer = answer && isSame(tree1.left, tree2.left);
    } else if ((tree1.left === null && tree2.left !== null) ||
        (tree1.left !== null && tree2.left === null)) {
        answer = answer && false;
    }

    if (tree1.right !== null && tree2.right !== null) {
        answer = answer && isSame(tree1.right, tree2.right);
    } else if ((tree1.right === null && tree2.right !== null) ||
        (tree1.right !== null && tree2.right === null)) {
        answer = answer && false;
    }

    return answer;
}

function isSubtree(tree1, tree2) {
    if (isSame(tree1, tree2)) {
        return true;
    } else {
        let answer = false;
        if (tree1.left !== null) { answer = answer || isSubtree(tree1.left, tree2); }
        if (tree1.right !== null) { answer = answer || isSubtree(tree1.right, tree2); }
        return answer;
    }
}

let a1 = new Tree(3);
let a2 = new Tree(1);
let a3 = new Tree(4);
let a4 = new Tree(10);
let a5 = new Tree(2);
let a6 = new Tree(80);

let b3 = new Tree(1);
let b6 = new Tree(10);
let b7 = new Tree(2);

let c3 = new Tree(4);
let c6 = new Tree(1);

a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;

b3.left = b6;
b3.right = b7;

c3.left = c6;

console.log(isSubtree(a1, b3));
console.log(isSubtree(a1, c3));