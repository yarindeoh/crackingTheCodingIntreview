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

function isSame2(n1, n2) {
    let value = n1 === n2;
    if(!n1 || !n2) return value;
    if(!n1.left && !n2.left) {
        value = value && isSame(n1.left, n2.left);
    } else if(!n1.right && !n2.right) {
        value = value && isSame(n1.right, n2.right);
    }
    return value;

}

function isSubTree2(t1, t2) {
    if(!t1 || !t2) {
        return false;
    } else if(t1.value === t2.value && isSame(t1, t2)) {
        return true;
    } else {
        return (t1.right && isSubTree(t1.right, t2)) || (t1.left && isSubTree(t1.left, t2)) || false;
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

////////////////////////////////////////

function checkIfSubTree(t1, t2) {
    let tree1Str = preOrderStr(t1, []);
    let tree2Str = preOrderStr(t2, []);
    return tree1Str.join("").includes(tree2Str.join(""));
}

function preOrderStr(n, arr) {
    if(n === null) {
        arr.push("X");
        return;
    } 
    arr.push(n.value);
    preOrderStr(n.left, arr);
    preOrderStr(n.right, arr);
    return arr;
}

var t1 = new Tree(1);
var t2 = new Tree(2);
var t3 = new Tree(3);
var t4 = new Tree(4);
var t5 = new Tree(5);
var t6 = new Tree(6);
var t7 = new Tree(7);
var t8 = new Tree(8);

t1.right = t3;
t1.left = t2;
t2.left = t4;
t3.right = t5;
t3.left = t6;
t5.right = t8;
t5.left = t7;

checkIfSubTree(t1, t4);