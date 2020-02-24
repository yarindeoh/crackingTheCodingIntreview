/**
 * (iterative solution go every el check if it's equal to index)
 * Distinct and sorted arr! o(NlogN) -> go to the middle each iteration 
 */
function getMagic(arr, start, end) {
    let midIndex = Math.round((start + end) / 2);
    if(arr[midIndex] === midIndex) {
        return midIndex;
    } else if(arr[midIndex] < midIndex) { // go right
        return getMagic(arr, midIndex + 1, end);
    } else if (arr[midIndex] > midIndex) { // go left
        return getMagic(arr, start, midIndex - 1);
    } else {
        return -1;
    } 
}

var arr = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13];
console.log(getMagic(arr, 0, arr.length - 1)); // 7

/**
 * No distinct values - > 
 * 1. go to left and then go to right
 * 2. sum all els if sum < (i - 1) * i keep going, otherwise break 
 *
 */
function getMagicNoDist(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i ++) {
        sum = sum + arr[i];
        if(sum > i * (i - 1)) {
            return false;
        } else if(arr[i] === i) {
            return i;
        }
    }
}

function getMagicNoDist2(arr){
 let midIndex = Math.round((start + end) / 2);
    if(arr[midIndex] === midIndex) {
        return midIndex;
    } 
    let left = getMagic(arr, start, midIndex - 1);
    if(left => 0) {
        return left;
    }
    let right = getMagic(arr, midIndex + 1, end);
    return right;
    //right left || right;
}

// function getMagicNoDist2(arr, start, end){
// // console.log(start);
// // console.log(end);
// if(start > end) return -1;
//  let midIndex = Math.round((start + end) / 2);
//     if(arr[midIndex] === midIndex) {
//         return midIndex;
//     } 
//     let left = getMagicNoDist2(arr, start, midIndex - 1);
// console.log(left);
//     if(left => 0) return left;
// console.log(start);
// console.log(end);
//     let right = getMagicNoDist2(arr, midIndex + 1, end);
//     return right;
// }