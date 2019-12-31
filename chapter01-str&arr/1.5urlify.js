function urlifyV1(str) {
    return str.replace(/ /g, "%20");
}

function urlifyV2(str) {
    let strArr = str.split("");
    strArr.map((char, index) => {
        if(char === " ") {
            strArr[index] = "%20";
        }
    });
    return strArr.join("");
}

/**
 * Splitting str is o(a) chars then going over words is o(b)
 * its o(a + b) -> o(n), space is big
 * @param str
 * @returns {string}
 */
function urlifyV3(str) {
    let strArr = str.trim().split(" ");
    let res = strArr[0];
    for(let i = 1; i < strArr.length - 1; i ++ ) {
        res += "%20" + strArr[i];
    }
    res += strArr[strArr.length - 1];
    return res;
}