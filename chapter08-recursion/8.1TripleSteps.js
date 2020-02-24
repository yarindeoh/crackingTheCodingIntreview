/**
 * Count all appearances of each number until it gets to 0 will count all 
 * premutation of n as a sum of 1 / 2 / 3 steps
 * this takes 0(branches ^ depth) -> 3^n
 * @param {number} n 
 */
function tripleSteps(n) {
    if(n < 0) {
        return 0;
    } else if(n === 0) {
        return 1;
    } else {
        return tripleSteps(n-1) + tripleSteps(n-2) + tripleSteps(n-3);
    }
}

/**
 * Can be optimize using Map/Set -> hash
 * @param {number} n 
 * @param {*} memo 
 */
function memoTripleSteps(n, memo = []) {
    if(n < 0) {
        return 0;
    } else if(n === 0) {
        return 1; 
    } else if(memo[n] > -1) {
        return memo[n];
    } else {
        memo[n] = tripleSteps(n-1, memo) + tripleSteps(n-2, memo) + tripleSteps(n-3, memo);
        return memo[n];
    } 
}