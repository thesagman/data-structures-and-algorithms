// Self Dividing Numbers

let left = 47, right = 85

var selfDividingNumbers = function (left, right) {
    let arr = []
    for (let i = left; i <= right; i++) {
        if (selfDividing(i)) {
            arr.push(i)
        }
    }

    return arr;
};

function selfDividing(number) {
    let temp = number;
    while (temp) {
        let digit = temp % 10;
        if (number % digit === 0) {
            temp = Math.floor(temp / 10)
        } else {
            return false
        }
    }
    return true;
}

console.log(selfDividingNumbers(left, right));