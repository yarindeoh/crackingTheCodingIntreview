/**
 * native solution
 * @param A
 * @returns {*}
 */

function findMax1(A) {
    let maxSum = -10000;
    let currentSum = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] == 0) {
            continue;
        }
        currentSum = currentSum+A[i];
        maxSum = Math.max(currentSum, maxSum);
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}

/**
 * fastest solution
 * @param A
 * @returns {*}
 */
function findMax2(A) {
    let i,j;
    j = A[0];
    let sum = A[0];
    for(i = 1; i < A.length; ++i){
        if(j < 0) {
            j = 0;
        }
        j += A[i];
        if(sum < j)
            sum = j;
    }
    return sum;
}

/**
 * 
 * @param {*} A 
 * @param {*} currSum track the subarrsum- adding to sum items until the sum become negative - reset it 
 * @param {*} ans will track max of sum until reseting stage
 */
function findMaxSubArr(A) {
    let currSum = 0;
    let ans = 0;
    for(let i = 0; i < A.length; i ++) {
        if(currSum + A[i] > 0) {
            currSum += A[i];
        } else {
            currSum = 0;
        }
        ans = Math.max(ans, currSum);
    }
    return ans;
}