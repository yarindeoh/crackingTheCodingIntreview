/**
 * o(n) which is the number of chars then going over chars without
 * dups
 * @param str
 * @returns {boolean}
 */
function isPermutationPolindrom(str) {
    let map = initMapFromStr(str.split(" ").join(""));
    let count = 0;
    let result = true;
    map.forEach((value, key) => {
        if(value === 1) {
            count ++;
        } else if(value %2 !== 0) {
            result = false;
        }
    });
    return (count === 1 || count === 0) && result;
}

function initMapFromStr(str) {
    let strArr = str.split("");
    let map = new Map();
    for(let i = 0; i < strArr.length; i ++) {
        !map.has(strArr[i]) ?  map.set(strArr[i], 1) :
            map.set(strArr[i],  map.get(strArr[i]) + 1);
    }
    return map;
}