/**
 * Going over all str1 its o(n)
 * @param str1
 * @param str2
 * @returns {boolean}
 */
function oneWay(str1, str2) {
    let strArr1 = str1.split("");
    let strArr2 = str2.split("");
    if(Math.abs(str1.length - str2.length) > 1) {
        return false;
    } else if(str1.length === str2.length) {
        let count = 0;
        for(let i = 0; i < strArr1.length; i ++) {
            if(strArr1[i] !== strArr2[i]) {
                count ++;
            }
        }
        return !(count > 1);
    } else {
        for(let i = 0; i < strArr1.length; i ++) {
            if((strArr1[i] !== strArr2[i])) {
                if ((strArr2[i + 1] && strArr1[i] !== strArr2[i + 1]) ||
                    (strArr1[i + 1] && strArr1[i + 1] !== strArr2[i])) {
                    return false;
                }
            }
        }
        return true;
    }
}

//oneWay("abc", "abcrr") false
//oneWay("abc", "abcr") true
//oneWay("abc", "ab") true
//oneWay("abe", "abc") true