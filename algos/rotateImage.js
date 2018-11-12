function rotateImage(a){
    let mat = a;
    let numRows = mat.length; let numCols = mat[0].length;

    for(let i = 0 ; i < numRows ; i++ ) {
        for(let j = i ; j < numCols ; j++) {
            let tmp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = tmp;
            console.log(tmp);
        }
    }
    console.log(mat);

    let start = 0;
    let end = numCols - 1;
    while(start < end) {
        for(let i = 0 ; i < numRows; i++){
            let tmp = mat[i][start];
            mat[i][start] = mat[i][end];
            mat[i][end] = tmp;
        }
        start++;
        end--;
    }
    return (mat);
}

let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

rotateImage(mat);