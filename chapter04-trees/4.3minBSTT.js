const BST = require('./helpers/BST');

function createMinBST(arr) {
    let midIndex = Math.round((arr.length - 1) / 2);
    let tree = new BST(arr[midIndex]);
    let count = arr.length / 2;
    let currMiddle = 1;
    while (count > 0)  {
        tree.addToBinaryTree(tree, arr[midIndex - currMiddle ]);
        tree.addToBinaryTree(tree, arr[midIndex + currMiddle ]);

        currMiddle ++;
        count --;
    }
    return tree;

}


let sortedArr = [6,7,8,9,10,11,12];
console.log(createMinBST(sortedArr));