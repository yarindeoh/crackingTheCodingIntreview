const isSubstring = () => {}; //black box function

function isRotation(str1, str2) {
    if (str1.length !== str2.length || !str1.length)
        return false;
    let doubleStr1 = str1 + str1;
    return isSubstring(doubleStr1, str2);
}