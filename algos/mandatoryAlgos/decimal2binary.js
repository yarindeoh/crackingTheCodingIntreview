function bin2num(str) {
    let value = 0;
    for(let i = 0; i < str.length ; i++ ){
        let exp = str.length - i - 1;
        let digit = str.charAt(str.length - exp - 1);
        value += digit * Math.pow(2, exp);
    }
    return value;
}

bin2num("1000"); //8