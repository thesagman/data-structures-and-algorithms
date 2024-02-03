// Running Sum of 1d Array

let nums = [1, 2, 3, 4];

var runningSum = function (nums) {
    let sum = 0;
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        ans[i] = sum;
    }
    return ans

};

console.log(runningSum(nums));