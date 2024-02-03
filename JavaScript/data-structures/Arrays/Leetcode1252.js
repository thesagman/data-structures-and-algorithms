// Cells with Odd Values in a Matrix

let m = 2
let n = 3
let indices = [
    [0, 1],
    [1, 1]
]

var oddCells = function (m, n, indices) {
    let matrix = new Array(m).fill(0).map(() => new Array(n).fill(0)); // Initialize the matrix with zeros

    // Increment matrix elements based on indices
    for (let i = 0; i < indices.length; i++) {
        let rowIndex = indices[i][0];
        let colIndex = indices[i][1];

        // Increment the entire row
        for (let j = 0; j < n; j++) {
            matrix[rowIndex][j]++;
        }

        // Increment the entire column
        for (let j = 0; j < m; j++) {
            matrix[j][colIndex]++;
        }
    }

    let oddCount = 0;

    // Count the odd elements in the matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] % 2 === 1) {
                oddCount++;
            }
        }
    }

    return oddCount;
};


console.log(oddCells(m, n, indices)); 
