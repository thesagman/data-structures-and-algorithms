// Determine Whether Matrix Can Be Obtained By Rotation
let mat = [
    [0, 1],
    [1, 0]
]
let target = [
    [1, 0],
    [0, 1]
]

var findRotation = function (mat, target) {
    function rotate(matrix) {
        let N = matrix.length
        let NewMatrix = new Array(N).fill(0).map(() => new Array(N).fill(0))

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                NewMatrix[i][j] = mat[N - j - 1][i]
            }
        }
        return NewMatrix;
    }

    function equal(mat1, mat2) {
        let N = mat1.length
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (mat1[i][j] != mat2[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }
    for (let i = 0; i < 4; i++) {
        if (equal(mat, target)) {
            return true;
        }
        mat = rotate(mat);
    }
    return false;
};
console.log(findRotation(mat, target));