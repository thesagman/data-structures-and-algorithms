// Plus One

let digits = [1, 2, 3]

var plusOne = function (digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry;
        carry = Math.floor(digits[i] / 10);
        digits[i] %= 10;
    }

    if (carry > 0) {
        digits.unshift(carry);
    }
    return digits;
};

console.log(plusOne(digits));
