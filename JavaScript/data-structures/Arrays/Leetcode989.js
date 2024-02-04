// Add to Array-Form of Integer

let num = [1, 2, 0, 0]
let k = 34

var addToArrayForm = function (num, k) {
    let newArr = num.reverse()
    let i = 0;
    while (k) {
        digit = k % 10;
        if (i < num.length) {
            newArr[i] += digit;
        } else {
            newArr[i] = digit;
        }

        let carry = Math.floor(newArr[i] / 10)
        newArr[i] = newArr[i] % 10
        k = Math.floor(k / 10)
        k += carry;
        i++;
    }
    return newArr.reverse()

};

console.log(addToArrayForm(num, k));