const Tree = require('./helpers/Tree');
//
// /**
//  * approach 1
//  * @param node
//  * @param elements
//  */
// function findPaths(node, elements) {
//     if(node === null) {
//         return;
//     } else if(node.right === null && node.left === null) {
//         if (!elements.length) {
//             elements.push([])
//         } else {
//             elements[elements.length] = [];
//         }
//         elements[elements.length - 1].push(node.value);
//     } else {
//         findPaths(node.right, elements);
//         findPaths(node.left, elements);
//         for(let i = 0; i < elements.length; i ++) {
//             elements[i].push(node.value);
//         }
//     }
//     return elements;
// }

/**
 * Find all paths of leafs - from root to leaf
 * @param {Node/Tree} root 
 */
function binaryTreePaths(root) {
    let paths = [];
    if(!root) return [];
    if(root.left == null && root.right == null) {
        if(paths.length === 0) return [""+root.value];
        else return root.value;
    }
    else {
        if(root.left)
            binaryTreePaths(root.left).forEach(function(lp) {
                paths.push(root.value + "->" + lp);
            });
        if(root.right)
            binaryTreePaths(root.right).forEach(function(rp) {
                paths.push(root.value + "->" + rp);
            });
    }

    return paths;
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

console.log(binaryTreePaths(a1));
