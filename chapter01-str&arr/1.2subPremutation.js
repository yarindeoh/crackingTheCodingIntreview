/**
 * Going over all str1 and searching str2 will cause o(a * b) which is o(n^2)
 * But o(1) in space complexity
 * @param str1
 * @param str2
 * @returns {boolean}
 */
function checkPremutationBP(str1, str2) {
    return str1.includes(str2);
}

/**
 * init and compare is going through all chars in str1
 * and str2 so it's o(a + b) which is o(n)
 * but space complexity is bigger
 * @param str1
 * @param str2
 * @returns {boolean}
 */
function premutation(str1, str2) {
    let map1 = initMapFromStr(str1);
    let map2 = initMapFromStr(str2);
    if(map1.size > map2.size) {
        return compare2maps(map2, map1);
    } else {
        return compare2maps(map1, map2);
    }
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
function compare2maps(sMap, lMap) {
    let res = true;
    sMap.forEach((value, key) => {
        if(!lMap.has(key) || lMap.get(key) < sMap.get(key)) {
            res = false;
        }
    });
    return res;
}