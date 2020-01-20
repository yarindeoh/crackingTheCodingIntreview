const Tree = require('./helpers/Tree');
const inOrderPrint = require('./helpers/inDepthPrint');

function minTree(arr, start, end) {
    if(end < start) {
        return null;
    }
    let midIndex = Math.round((start + end) / 2);
    let mid = new Tree(arr[midIndex]);
    mid.left = minTree(arr, start, midIndex - 1);
    mid.right = minTree(arr, midIndex + 1, end);
    return mid;
}

function findMinTree(arr) {
    return minTree(arr, 0, arr.length - 1);
}

//inOrderPrint(findMinTree([2,4,6,8,10]));
//2
//4
//6
//8
///10
