/**
 * Given a column title as appears in an Excel sheet, return its corresponding column number.
 * A -> 1 B->2 Z-> 26 AA-> 27
 * @param {String} A 
 */
function excelTitleNum (A) {
       let arr = A.split("");
       let num = 0;
       let multiplier = arr.length - 1;
        for(let i = 0; i < arr.length; i ++) {
            num += Math.pow(26,multiplier) * (arr[i].charCodeAt(0) - 64);
            multiplier --;
        }
        return num;
}