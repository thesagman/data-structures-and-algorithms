// Number of Good Pairs

let nums = [1, 2, 3, 1, 1, 3]

var numIdenticalPairs = function (nums) {
    let GoodPairCount = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                GoodPairCount += 1;
            }
        }
    }
    return GoodPairCount
};

console.log(numIdenticalPairs(nums));