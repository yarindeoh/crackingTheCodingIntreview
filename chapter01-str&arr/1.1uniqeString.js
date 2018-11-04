function findDupV1(str) {
    let strArr = str.split("").sort();
    for(let i = 0; i < strArr.length; i ++) {
        if(strArr[i] === strArr[i+1]) return true;
    }
    return false;
}

function findDupV2(str) {
    let strArr = str.split("");
    let strSet = new Set(strArr);
    return strSet.size !== strArr.length;
}