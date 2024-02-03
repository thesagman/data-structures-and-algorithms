// Matrix Diagonal Sum

let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var diagonalSum = function (mat) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][i] // Primary Diagonal
        sum += mat[i][mat.length - 1 - i]  // Secondary Diagonal
    }
    if (mat.length % 2 == 1) {
        sum = sum - mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)]
    }
    return sum;

};

console.log(diagonalSum(mat));