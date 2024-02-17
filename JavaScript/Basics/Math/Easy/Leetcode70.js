// Climbing Stairs

let n = 2

var climbStairs = function (n) {
    let one = 1, two = 1
    for (let i = n - 1; i > 0; i--) {
        let temp = one
        one = one + two;
        two = temp;
    }
    return one;
};

console.log(climbStairs(n));