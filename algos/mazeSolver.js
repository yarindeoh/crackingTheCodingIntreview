var map = [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 0],
    [1, 0, 1, 1],
];

var goalx = 0;
var goaly = 3;

function findpath(x, y) {
    console.log(map);
    // illegal move check - if it is outside of map
    if (x < 0 || x > map[0].length - 1 || y < 0 || y > map.length - 1)
        return false;

    // it is not open
    if (map[y][x] == 0) return false;

    // reached end point
    if (x == goalx && y == goaly) {
        console.log('Reached goal at: ' + x + ':' + y);
        return true;
    }
    // it's visited
    if (map[y][x] == 9) return false;

    console.log('Im here at: ' + x + ':' + y);
    // marking x,y position as visited
    map[y][x] = 9;

    if (findpath(x + 1, y)) return true;
    if (findpath(x, y + 1)) return true;
    if (findpath(x, y - 1)) return true;
    if (findpath(x - 1, y)) return true;

    return false;
}

findpath(3, 3);
