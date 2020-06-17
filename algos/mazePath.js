/**
 * [0,1] -> [2, 2]
 * @param {Array} a [x, y]
 * @param {Array} b [x, y]
 */
function getPath(a, b) {
    const m = [
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ];
    let rows = m.length;
    let cols = m[0].length;
    let pathArr = [];
    function path(x, y) {
        //found the dest
        if(x === b[0] && y === b[1]) {
            return;
        }
        if(m[x][y] === 1) {
            //go right if there is
            path(x + 1, y);
            // go left if there is
            path(x, y + 1);
        }
    }
}
