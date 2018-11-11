function findCountMatrixPaths(x, y, N, count) {
    if(x === (N-1) && y === (N -1)) {
        return count;
    } else if(x === (N - 1) && y !== (N - 1)) {
        count = 1 + findCountMatrixPaths(x, y + 1, N, count)
    } else if(y === (N - 1) && x !== (N - 1)) {
        count = 1 + findCountMatrixPaths(x + 1, y, N,count)
    } else {
        count = 1 + findCountMatrixPaths(x + 1, y, N, count);
        count = 1 + findCountMatrixPaths(x, y + 1, N, count);
        count = 1 + findCountMatrixPaths(x + 1, y + 1, N, count);
    }
    return count;
}

console.log(findCountMatrixPaths(0, 0, 3, 0));

