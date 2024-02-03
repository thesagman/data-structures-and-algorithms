// Shuffle the Array

let nums = [2, 5, 1, 3, 4, 7]
let n = Math.floor(nums.length / 2)


var shuffle = function (nums, n) {
    let ans = []
    for (let i = 0; i < n; i++) {
        ans[2 * i] = nums[i];
        ans[2 * i + 1] = nums[n + i];
    }
    return ans;
};

console.log(shuffle(nums, n));