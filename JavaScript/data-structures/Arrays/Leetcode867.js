// Transpose Matrix

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var transpose = function (matrix) {
    rows = matrix.length
    cols = matrix[0].length
    let mat = new Array(cols).fill(0).map(() => new Array(rows).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            mat[j][i] = matrix[i][j]
        }
    }
    return mat;

};

console.log(transpose(matrix));