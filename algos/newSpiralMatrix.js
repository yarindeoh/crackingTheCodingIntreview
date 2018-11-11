function generateMatrix(A){
    let current = 1;
    let matrix = [];
    let start = 0;
    let end = A;

    initMatrix();
    let numOfSquares = Math.round(A / 2);
    while(numOfSquares) {
        console.log(start);
        console.log(end);
        initRow1Col1(start, end);
        initRow2Col2(start, end);

        start = start + 1;
        end = end - 1;
        numOfSquares = numOfSquares - 1;
    }

    console.log(matrix);

    function initMatrix() {
        for(let i = 0; i < A; i ++) {
            matrix.push([]);
        }
    }
    function initRow1Col1(start, end) {
        for(let i = start; i < end; i ++) {
            matrix[start][i] = current;
            current = current + 1;
        }
        for(let i = start + 1; i < end; i ++) {
            matrix[i][end - 1] = current;
            current = current + 1;
        }
    }
    function initRow2Col2(start, end) {
        for(let i = end - 2; i > start; i --) {
            matrix[end - 1][i] = current;
            current = current + 1;
        }
        for(let i = end - 1; i > start; i --) {
            matrix[i][start] = current;
            current = current + 1;
        }
    }
}
