let testMatrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

/**
 * complexity o(n2) + space complexity
 * @param m
 * @returns {Array}
 */
function rotateImagev2(m) {
    let res = [];
    for(let i = 0; i < m.length; i ++) {
        let row = [];
        for(let j = m.length - 1; j >= 0; j --) {
            row.push(m[j][i]);
        }
        res.push(row);
    }
    return res;
}

/**
 * swap :
 * [[1,2,3],
 * [4,5,6],
 * [7,8,9]]
 * Reverse
 * [[7,8,9],
 * [4,5,6],
 * [1,2,3]]
 * replace 8 with 4 (0,1 with 1,0)
 * replace 9 with 1 (2,0 with 0,2)
 * replace 6 with 2 (2,1 with 1,2)
 * complexity of o(n^2) touch all fields
 * @param m
 * @returns {*}
 */
function rotateImagev3(m) {
    m.reverse();
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = m[i][j];
            m[i][j] = m[j][i];
            m[j][i] = temp;
        }
    }
    return m;
}