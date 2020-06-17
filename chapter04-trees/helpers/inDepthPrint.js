const Tree = require('./Tree');

/**
 * in-depth root-> left -> right
 * o(height)
 * @param t
 */
function preOrderPrint(t) {
    if (t === null) return;
    console.log(t.value);
    preOrderPrint(t.left);
    preOrderPrint(t.right);
}

/**
 * in-depth in order
 * left -> root -> right
 * @param t
 */
export function inOrderPrint(t) {
    if (t === null) return;
    inOrderPrint(t.left);
    console.log(t.value);
    inOrderPrint(t.right);
}

/**
 * Inorder traversal using stack !
 * @param {TreeNode} A 
 */
function inorderTraversal(A) {
    let res = [];
    let current = A;
    let stack = [];
    while (current != null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        console.log(current);
        res.push(current.data);
        current = current.right;
    }
    return res;
}

/**
 * in-depth left -> right -> root
 * @param t
 */
function postOrder(t) {
    if (t === null) return;
    inOrderPrint(t.left);
    inOrderPrint(t.right);
    console.log(t.value);
}

let a1 = new Tree('F');
let a2 = new Tree('D');
let a3 = new Tree('J');
let a4 = new Tree('B');
let a5 = new Tree('E');
let a6 = new Tree('G');
let a7 = new Tree('I');
let a8 = new Tree('K');
let a9 = new Tree('C');
let a10 = new Tree('A');

a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;
a6.right = a7;
a3.right = a8;
a4.right = a9;
a4.left = a10;

console.log('pre order ->>>>>>>>>');
preOrderPrint(a1);
console.log('in order ->>>>>>>>>');
inOrderPrint(a1);

//  preorderTraversal : function(A){
//         if (!A) return [];
//         const arr = [];
//         const stack = [];
//         // push right then left ... [right, left].. remove from top
//         stack.push(A)
//         while (stack.length > 0) {
//             curr = stack.pop();
//             arr.push(curr.data);

//             if (curr.right) stack.push(curr.right);
//             if (curr.left) stack.push(curr.left)
//         }
//         return arr
//     }
