function anagramStrV1(str1, str2) {
    let strArr1 = str1.split("").sort();
    let strArr2 = str2.split("").sort();

    if(strArr1.length !== strArr2.length) return false;
    for(let i = 0; i < strArr1.length; i++ ) {
        if(strArr1[i] !== strArr2[i]) return false;
    }
    return true;
}

function anagramStrV2(str1, str2) {
    let str1Mutate = str1.split("").sort().join("");
    let str2Mutate = str2.split("").sort().join("");
    return str1Mutate === str2Mutate;
}