// Create Target Array in the Given Order

let nums = [0, 1, 2, 3, 4];
let index = [0, 1, 2, 2, 1];

var createTargetArray = function (nums, index) {
    let targetArray = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = targetArray.length - 1; j >= index[i]; j--) {
            targetArray[j + 1] = targetArray[j];
        }
        targetArray[index[i]] = nums[i];
    }
    return targetArray;
};

console.log(createTargetArray(nums, index));
