let grid = [
    [0,0,0], 
    [0,1,0], 
    [0,0,0], 
    [1,1,0]
    ]

/**
 * 
 * @param {row} r 
 * @param {col} c 
 * @param {Array of points} path 
 */
function robotInGrid(r, c, path =[]) {
  let endRow = grid.length - 1;
  let endCol = grid[0].length - 1;
   if (r === endRow && c === endCol) {
       path.push([r, c]);
   } else if (r <= endRow && c <= endCol) {
        if (r < endRow && grid[r + 1][c] !== 1) {
            path.push([r, c]);
            robotInGrid(r + 1, c, path);
      }
        if (c < endCol && grid[r][c + 1] !== 1) {
            path.push([r, c]);
            robotInGrid(r, c + 1, path);
      }
    
    } 
return path;
} 

