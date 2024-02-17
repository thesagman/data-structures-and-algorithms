// Armstrong Numbers

let n = 153

var isArmstrong = function (n) {
    let temp = n;
    let result = 0;
    let count = Count(n);
    while (temp) {
        let digit = temp % 10;
        result += Math.pow(digit, count)
        temp = Math.floor(temp / 10)
    }

    return result === n;

}

function Count(n) {
    let count = 0;
    while (n) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

console.log(Armstrong(n));