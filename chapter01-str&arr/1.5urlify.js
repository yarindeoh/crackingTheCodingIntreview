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
