// Find N Unique Integers Sum up to Zero

let n = 4;

var sumZero = function (n) {
    let arr = [];
    for (let i = 0; i < Math.floor(n / 2); i++) {
        arr[i] = i + 1;
        arr[n - 1 - i] = -(i + 1);
    }
    if (n % 2 !== 0) {
        arr[Math.floor(n / 2)] = 0;
    }
    return arr;
};

console.log(sumZero(n));