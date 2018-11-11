function findLongestPolindrom(A) {
    function isPalindrome(str) {
        return str === str.split("").reverse().join("");
    }
    if(isPalindrome(A)) return A;
    let string = A;
    let maxString = '';
    while (0 < string.length){
        let testString = '';
        for (let i = 0; i < string.length; i++ ){
            testString += string[i];
            if (isPalindrome(testString) && testString.length > maxString.length){
                console.log('poli' + testString);
                maxString = testString;
            }
        }
        string = string.slice(1);
    }
    return maxString;
}

console.log(findLongestPolindrom('AAB'));