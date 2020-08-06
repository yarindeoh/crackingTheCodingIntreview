function findPaths() {
    let grid = [
        ['0', '0', '0', '0'],
        ['0', 'x', '0', 'x'],
        ['x', '0', '0', '0'],
    ];
    let paths = [];
    let endRow = grid.length - 1;
    let endCol = grid[0].length - 1;
    function recurse(row, col, currPath) {
        if (row === endRow && col === endCol) {
            paths.push(currPath.concat([[row, col]]));
        } else if (row <= endRow && col <= endCol) {
            if (row < endRow && grid[row + 1][col] !== 'x') {
                recurse(row + 1, col, currPath.concat([[row, col]]));
            }
            if (col < endCol && grid[row][col + 1] !== 'x') {
                recurse(row, col + 1, currPath.concat([[row, col]]));
            }
        }
    }
    recurse(0, 0, []);
    return paths;
}

findPaths();

function findPaths4() {
    let grid = [
        ['0', '0', '0', '0'],
        ['0', 'x', '0', 'x'],
        ['x', '0', '0', '0'],
    ];
    let paths = [];
    let endRow = grid.length - 1;
    let endCol = grid[0].length - 1;
    function recurse(row, col, currPath) {
        if (row === endRow && col === endCol) {
            paths.push(currPath.concat([[row, col]]));
        } else if (row <= endRow && col <= endCol && grid[row][col] !== 9) {
            grid[row][col] = 9;
            if (row < endRow && grid[row + 1][col] !== 'x') {
                recurse(row + 1, col, currPath.concat([[row, col]]));
            }
            if (col < endCol && grid[row][col + 1] !== 'x') {
                recurse(row, col + 1, currPath.concat([[row, col]]));
            }
            if (row < endRow && grid[row - 1][col] !== 'x') {
                recurse(row, col + 1, currPath.concat([[row, col]]));
            }
            if (col < endCol && grid[row][col - 1] !== 'x') {
                recurse(row, col + 1, currPath.concat([[row, col]]));
            }
        }
    }
    recurse(0, 0, []);
    return paths;
}

findPaths4();
