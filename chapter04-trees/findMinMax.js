const Tree = require('./helpers/Tree');

function findMin(t) {
    if(t === null) return;
    let min = t.value;
    if(t.left != null) {
        min = Math.min(min, findMin(t.left));
    }
    if(t.right != null) {
        min = Math.min(min, findMin(t.right));
    }
    return min;
}

function findMax(t) {
    if(t === null) return;
    let max = t.value;
    if(t.left != null) {
        max = Math.max(max, findMax(t.left));
    }
    if(t.right != null) {
        max = Math.max(max, findMax(t.right));
    }
    return max;
}

let a1 = new Tree(3);
let a2 = new Tree(1);
let a3 = new Tree(4);
let a4 = new Tree(10);
let a5 = new Tree(2);
let a6 = new Tree(80);

a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;

console.log(findMin(a1));
console.log(findMax(a1));