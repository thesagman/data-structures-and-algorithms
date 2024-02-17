// Power of Four

let n = 16

var isPowerOfFour = function (n) {
    if (n <= 0) {
        return false;
    }
    while (n > 1) {
        if (n % 4 !== 0) {
            return false;
        }
        n /= 4;
    }
    return true;
};

console.log(isPowerOfFour(n));