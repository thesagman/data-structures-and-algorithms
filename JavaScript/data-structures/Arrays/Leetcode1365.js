// How Many Numbers Are Smaller Than the Current Number

let nums = [8, 1, 2, 2, 3]

var smallerNumbersThanCurrent = function (nums) {
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (j != i && nums[j] < nums[i]) {
                count++;
            }
        }
        ans[i] = count;
    }
    return ans
};

console.log(smallerNumbersThanCurrent(nums));