/**
 * string with 1000 digits -> string + 1
 *
 * "200000...100" -> "101"
 * "10000119" -> "10000110" "999999998" -> ""
 * "100000000" -> "1000..."
 * "099999" -> ""
 *
 * @param {String} str
 */
function increaseByOne(str) {
    let strArr = str.split('');
    let needToInc = true;
    let steps = strArr.length - 1;
    while (needToInc && steps >= 0) {
        if (strArr[i] < 9) {
            // increase by 1
            strArr[i] = strArr[i] + 1;        
            needToInc = false;
            break;
        } else {
            // if it's 9 ->
            strArr[i] = '0';
        }
        steps--;
    }
    return strArr.join('');
}
