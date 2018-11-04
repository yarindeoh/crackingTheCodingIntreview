/**
 * Solution with buffer- set data structure
 * @param str
 * @returns {string}
 */
function removeDupV1(str) {
    let strArr = str.split("");
    let strSet = new Set(strArr);
    return [...strSet].join("");
}

/**
 * Iterative solution without buffer
 * go on every char in a string arr
 * @param str
 * @returns {string}
 */
function removeDupV2(str) {
    let strArr = str.split("");
    for(let i = 0; i < strArr.length; i ++) {
        for(let j = i + 1; j < strArr.length; j++) {
            if(strArr[i] === strArr[j]) delete strArr[j];
        }
    }
    return strArr.join("");
}