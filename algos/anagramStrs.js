function anagrams(A) {
    let mapStr = new Map();
    let strArr = A;
    let res = [];
    for (let i = 0; i < strArr.length; i++) {
        let sorted = strArr[i].split('').sort().join('');
        if (mapStr.has(sorted)) {
            let val = mapStr.get(sorted);
            val.push(i + 1);
            mapStr.set(sorted, val);
        } else {
            mapStr.set(sorted, [i + 1]);
        }
    }
    mapStr.forEach((item) => {
        res.push(item);
    });
    return res;
}
