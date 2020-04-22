/**
 * 
 * @param {Number} A 
 * 5 - returns 
 * [
     [1],
     [1,1],
     [1,2,1],
     [1,3,3,1],
     [1,4,6,4,1]
]
 */
function pascalTriangle(A){
    let res = [[1]];
    if (!A) return [];
    for(let i = 0; i < A - 1; i ++) {
        let curr = [1];
        for(let j = 1; j <= res[i].length - 1; j ++){
            curr.push(res[i][j - 1] + res[i][j]);
        }
        curr.push(1);
        res.push(curr);
    }
    return res;
}

function d(A) {
            let sum;
        let seqSum = 0;
        for(let i = 0; i < A.length; i ++) {
            sum += A[i];
            seqSum += i;
        }
        if(sum < seqSum) return sum;
}