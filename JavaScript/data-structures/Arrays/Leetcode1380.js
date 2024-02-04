// Lucky Numbers in a Matrix

let matrix = [
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17]
]

var luckyNumbers = function (matrix) {
    let minArray = [];
    let maxArray = [];

    for (let i = 0; i < matrix.length; i++) {
        let min = Math.min(...matrix[i]);
        minArray.push(min);
    }

    for (let j = 0; j < matrix[0].length; j++) {
        let max = -Infinity;
        for (let i = 0; i < matrix.length; i++) {
            max = Math.max(max, matrix[i][j]);
        }
        maxArray.push(max);
    }
   console.log(minArray,maxArray);

    let luckyNumbers = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === minArray[i] && matrix[i][j] === maxArray[j]) {
                luckyNumbers.push(matrix[i][j]);
            }
        }
    }

    return luckyNumbers;
};

console.log(luckyNumbers(matrix));