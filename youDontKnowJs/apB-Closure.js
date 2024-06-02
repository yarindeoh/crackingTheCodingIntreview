function getArrOfNums(numStart, numEnd) {
    let arr = [];
    for(let i = numStart; i <= numEnd; i ++) {
        arr.push(i);
    }
    return arr;
}

function range(start, end) {
    if(!end) {
        return function(numEnd) {
            return getArrOfNums(start, numEnd);
        }
    }
    return getArrOfNums(start, end);
}

range(3,3);    // [3]
range(3,8);    // [3,4,5,6,7,8]
range(3,0);    // []

var start3 = range(3);
var start4 = range(4);

start3(3);     // [3]
start3(8);     // [3,4,5,6,7,8]
start3(0);     // []

start4(6);     // [4,5,6]
