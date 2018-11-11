function fibo1(num) {
    if(num === 1 || num === 0) {
        return num;
    } else {
        return fibo1(num - 1) + fibo1(num - 2);
    }
}

function fibo2(num) {
    if(num === 0) {
        return 0;
    }
    let a = 1;
    let b = 1;
    for( let i = 3; i <= num; i ++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibo1(6));
console.log(fibo2(6));