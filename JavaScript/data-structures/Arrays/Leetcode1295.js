// Find Numbers with Even Number of Digits

let nums = [12, 345, 2, 6, 7896]

var findNumbers = function (nums) {
    let evenNum = 0;
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i]
        let count = 0;
        while (temp) {
            temp = Math.floor(temp / 10)
            count++;
        }
        if (count % 2 == 0) {
            evenNum++;
        }
    }

    return evenNum;
};

console.log(findNumbers(nums));