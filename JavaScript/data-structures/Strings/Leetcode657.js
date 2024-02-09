// Robot Return to Origin

let moves = "UD"

var judgeCircle = function (moves) {
    let count = [0, 0];
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "U") {
            count[0] += 1;
        } else if (moves[i] === "D") {
            count[0] -= 1;
        } else if (moves[i] === "L") {
            count[1] += 1;
        } else if (moves[i] === "R") {
            count[1] -= 1;
        }
    }
    if (count[0] === 0 && count[1] === 0) {
        return true;
    }
    return false;
};

console.log(judgeCircle(moves));