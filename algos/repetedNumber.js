/**
 * Given a read only array of n + 1 integers between 1 and n, 
 * find one number that repeats in linear time using less than O(n) 
 * space and traversing the stream sequentially O(1) times.
 * [3 4 1 4 1] - 1 or 4
 * @param {Array} A 
 */
function repeatedNumber(A){
        let outMap = new Map();
        let res = -1;
        for(let i = 0; i < A.length; i ++) {
            outMap.set(A[i], outMap.has(A[i]) ? outMap.get(A[i]) + 1 : 1);
        }
        outMap.forEach((value, key) => {
            if(value > 1) res = key
        })
        return res;
    }