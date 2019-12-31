/**
 * Sort before with o(n * log(n))
 * space complexity of o(1)
 * @param str
 * @returns {boolean}
 */
function findDupV1(str) {
    let strArr = str.split("").sort();
    for(let i = 0; i < strArr.length; i ++) {
        if(strArr[i] === strArr[i+1]) return true;
    }
    return false;
}

/**
 * Time complexity is o(n), probably inserting to Set is o(n)
 * space complexity is o(n) also
 * @param str
 * @returns {boolean}
 */
function findDupV2(str) {
    let strArr = str.split("");
    let strSet = new Set(strArr);
    return strSet.size !== strArr.length;
}

/**
 * Simple, time complexity o(n)
 * space complexity is o(b) where b is the unique chars
 * @param str
 * @returns {boolean}
 */
function findDupBruteForce(str) {
    let dic = {};
    let arr = str.split("");
    for(let i = 0; i < arr.length; i ++ ) {
        if(dic[arr[i]] && dic[arr[i]] === 1) {
            return false;
        } else {
            dic[arr[i]] = 1;
        }
    }
    return true;
}