/**
 * 
 * @param {str} currPerm 
 * @param {srt} remainingChars 
 * @param {arr} res 
 */
function permuteString(currPerm, remainingChars, res = []) {
     if (remainingChars.length === 0) {
      res.push(currPerm);
    } else {
      for (var i = 0; i < remainingChars.length; i++) {
          let strI = currPerm + remainingChars.charAt(i);
          let remainingI = remainingChars.slice(0, i) + remainingChars.slice(i+ 1);
        permuteString(strI, remainingI, res);
      }
    }
    return res;
}