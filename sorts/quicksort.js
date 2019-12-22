function qsort(arr) {
    console.log(`call => ${ arr} `);
    if(arr.length <= 1) {
        return arr;
    }
    const left = [], right = [], pivot = arr[0];
    for(let i = 1; i < arr.length; i ++) {
        arr[i] < pivot ? left.push(arr[i]) :
            right.push(arr[i]);
    }
    return qsort(left).concat(pivot).concat(qsort(right));
}

qsort([5,2,7,9,6,1,4,5,0]);

//arr => 5,2,7,9,6,1,4,5,0
// call 1 => 2,1,4,0
// call 2 => 1,0
// call 3 => 0
// call 4 => []
// call 5 => 4
// call 6 => 7,9,6,5
// call 7 => 6,5
// call 8 => 5
// call 9 => []
// call 10 => 9
