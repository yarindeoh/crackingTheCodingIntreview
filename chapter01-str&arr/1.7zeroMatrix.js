/**
 * rights for this beautiful solution: Tony K. Tan
 * @param matrix
 * @returns {{rowsToZeroify, colsToZeroify}}
 */
let checkZeros = function(matrix) {
    let matrixHeight = matrix.length;
    let matrixWidth = matrix[0].length;
    let rowsToZeroify = {}; // use hashtables to remove duplicates
    let colsToZeroify = {};

    for (let i = 0; i < matrixHeight; i++) {
        for (let j = 0; j < matrixWidth; j++) {
            if (matrix[i][j] === 0) {
                rowsToZeroify[i] = true;
                colsToZeroify[j] = true;
            }
        }
    }
    return {
        rowsToZeroify: rowsToZeroify,
        colsToZeroify: colsToZeroify
    };
};

let printMatrix = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
};

let zeroifyCol = function(matrix, col) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
};

let zeroifyCols = function(matrix, zeroScan) {
    for (let col in zeroScan.colsToZeroify) {
        zeroifyCol(matrix, Number(col));
    }
};

let zeroifyRow = function(matrix, row) {
    for (let i = 0; i < matrix[row].length; i++) {
        matrix[row][i] = 0;
    }
};

let zeroifyRows = function(matrix, zeroScan) {
    for (let row in zeroScan.rowsToZeroify) {
        zeroifyRow(matrix, Number(row));
    }
};

/* Main Function */
let zeroMatrix = function(matrix) {

    if(matrix.length === 0) { return; }

    let zeroScan = checkZeros(matrix);
    console.log(zeroScan);
    zeroifyCols(matrix, zeroScan);
    zeroifyRows(matrix, zeroScan);

};

// Testing
let testMatrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
];

console.log('before');
printMatrix(testMatrix);

zeroMatrix(testMatrix);

console.log('after');
printMatrix(testMatrix);