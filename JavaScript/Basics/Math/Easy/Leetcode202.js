// Happy Number

let n = 19

var isHappy = function (n) {
    let Visit = new Set()
    while (!Visit.has(n)) {
        Visit.add(n);
        n = SumofSquares(n)
        if (n === 1) {
            return true;
        }
    }
    return false;
};

function SumofSquares(n) {
    let result = 0;
    while (n) {
        let remainder = n % 10;
        remainder = Math.pow(remainder, 2)
        result += remainder
        n = Math.floor(n / 10)
    }
    return result;
}

console.log(isHappy(n));
