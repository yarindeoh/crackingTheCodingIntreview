/**
 * A maze of 1 and 0. 1- can't pass, 0 can pass
 * @param {*} startPoint [row1,col1]
 * @param {*} endPoint [row2,col2]
 */
function solveMaze(startPoint, endPoint) {
    let m = [
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
    ];
    let m = [
        [1, 1, 0, 0, 0],
        [0, 1, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
    ];
    let maxCol = m[0].length - 1;
    let maxRow = m.length - 1;
    let canReach = false;
    function zeroOneMaze(row, col) {
        if (m[row][col] === 1) {
            return;
        } else if (m[row][col] === 0) {
            console.log(`row is ${row} col is ${col}`);

            if (row === endPoint[0] && col === endPoint[1]) {
                console.log('got it');
                canReach = true;
                return;
            }
            if (row === maxCol) {
                console.log('bound row');
                zeroOneMaze(row, col + 1);
            } else if (col === maxRow) {
                console.log('bound col');
                zeroOneMaze(row + 1, col);
            } else if (m[row + 1][col] === 1 && m[row][col + 1] === 0) {
                console.log('1 in row');
                zeroOneMaze(row, col + 1);
            } else if (m[row][col + 1] === 1 && m[row + 1][col] === 0) {
                console.log('1 in col');
                zeroOneMaze(row + 1, col);
            } else {
                console.log('else');
                if (col < endPoint[0]) {
                    zeroOneMaze(row + 1, col);
                } else if (row < endPoint[1]) {
                    zeroOneMaze(row, col + 1);
                }
            }
        }
        return canReach;
    }
    return zeroOneMaze(startPoint[0], startPoint[1]);
}

solveMaze([2, 0], [4, 3]);

function test2(startPoint, endPoint) {
    let maze = [
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
    ];
    let canReach = false;
    let maxCol = maze[0].length - 1;
    let maxRow = maze.length - 1;

    function isPath(row, col) {
        console.log(row);
        console.log(col);
        if (row === endPoint[0] && col === endPoint[1]) {
            canReach = true;
            return;
        } else if (maze[row][col] === 0) {
            maze[row][col] = 9;
            if (row <= 0) {
                isPath(row + 1, col);
            } else if (col <= 0) {
                isPath(row, col + 1);
            } else if (
                maze[row][col] !== 1 &&
                col !== maxCol &&
                row !== maxRow &&
                maze[row][col] !== 9
            ) {
                isPath(row + 1, col);
                isPath(row - 1, col);
                isPath(row, col + 1);
                isPath(row + 1, col - 1);
            } else {
                return;
            }
        }
    }
    isPath(startPoint[0], startPoint[1]);
    return canReach;
}

test2([0, 1], [2, 3]);
