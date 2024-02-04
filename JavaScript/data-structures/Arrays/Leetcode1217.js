// Minimum Cost to Move Chips to The Same Position

let position = [1, 2, 3]

var minCostToMoveChips = function (position) {
    let evenCount = 0;
    let oddCount = 0;

    for (let chip of position) {
        if (chip % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return Math.min(evenCount, oddCount);
};

console.log(minCostToMoveChips(position));