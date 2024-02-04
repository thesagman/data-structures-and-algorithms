// Remove Duplicates from Sorted Array

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0; 

    let left = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[left] = nums[i];
            left++;
        }
    }
    return left; 
};

console.log(removeDuplicates(nums));