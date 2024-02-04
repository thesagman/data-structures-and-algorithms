// Reshape the Matrix

let mat = [[1, 2], [3, 4]]
let r = 1
let c = 4

var matrixReshape = function (mat, r, c) {
    let rows = mat.length
    let cols = mat[0].length
    let newMat = new Array(r).fill(0).map(() => new Array(c).fill(0))
    if ((rows * cols) !== (r * c)) return mat;
    let rowindex = 0;
    let colindex = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            newMat[rowindex][colindex] = mat[i][j]
            colindex++;
            if (colindex == c) {
                colindex = 0;
                rowindex++;
            }
        }
    }
    return newMat
};

console.log(matrixReshape(mat, r, c));