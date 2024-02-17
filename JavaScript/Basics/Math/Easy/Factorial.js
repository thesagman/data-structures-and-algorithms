// Factorial

let n = 5;

var Factorial = function (n) {
    if (n === 1) {
        return n;
    }
    return n * Factorial(n - 1)
}

console.log(Factorial(n));