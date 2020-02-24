const myMaze = [
    [0,0,0,0,1,1,0,0,0,0],
    [0,1,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,1,2,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,1,0,0,0,0]
];

function traverse(maze, col, row) {
    if(maze[col][row] === 2) {
        console.log("solve it " + col + " " + row);
    } else if(maze[col][row] === 1) {
        console.log("were on a path");
        //value another then 1 so we wont go in loop
        maze[col][row] = 9;
        if(col < maze.length - 1) {
            traverse(maze, col + 1, row);
        }
        if(row < maze.length - 1) {
            traverse(maze, col, row + 1);
        }
        if(col > 0) {
            traverse(maze, col - 1, row);
        }
        if(row > 0) {
            traverse(maze, col, row - 1);
        }
    }
}


console.log(traverse(myMaze, 1, 2));

let makeGrid = function(n) {
    let grid = [];
    for(let i = 0; i < n; i ++) {
        grid.push([]);
            for(let j = 0; j < n; j ++) {
                grid[i][j] = false;
            }
        }

    grid.toggle = function(i, j) {
        grid[i][j] = !grid[i][j];
    }
    
}