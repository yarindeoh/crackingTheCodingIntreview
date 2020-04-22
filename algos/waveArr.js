/**
 * Given an array of integers, sort the array into a wave like array and return it,
In other words, arrange the elements into a sequence such that a1 >= a2 <= a3 >= a4 <= a5.....
[2,3,4,1] => [1,2,3,4] => [2,1,4,3]
 * @param {Array} A 
 */
function wave(A){
    A.sort(function(a, b) {
      return a - b;
    });
    for(let i = 0; i < A.length - 1; i+=2) {
        let temp = A[i];
        A[i] = A[i + 1];
        A[i + 1] = temp;
    }
    return A;
}