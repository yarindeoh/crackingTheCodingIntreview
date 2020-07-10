/**
 *
 * @param {row} x 
 * @param {col} y
 * @param {Array of points} path
 */
function findPaths() {
    let grid = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
        [1, 1, 0],
    ];
    var paths = [];
    var endRow = grid.length - 1;
    var endCol = grid[0].length - 1;
    function robotInGrid(row, col, currPath = []) {
        if (row === endRow && col === endCol) {
            paths.push(currPath.concat([[row, col]]));
        } else if (row <= endRow && col <= endCol) {
            if (row < endRow && grid[row + 1][col] !== 1) {
                robotInGrid(row + 1, col, currPath.concat([[row, col]]));
            }
            if (col < endCol && grid[row][col + 1] !== 1) {
                robotInGrid(row, col + 1, currPath.concat([[row, col]]));
            }
        }
    }
    robotInGrid(0, 0);
    return paths;
}

findPaths();
