/**
 * Going over all str chars is o(n) where n is the number of chars
 * @param str
 * @returns {string|number}
 */
function strCompress(str) {
    let strArr = str.split("");
    if(!strArr.length) return -1;
    let count = 0;
    let compressed = "";
    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i] === strArr[i+1]) {
            count ++;
        } else {
            count ++;
            compressed += strArr[i] + (count || '');
            count = 0;
        }
    }
    return compressed;
}