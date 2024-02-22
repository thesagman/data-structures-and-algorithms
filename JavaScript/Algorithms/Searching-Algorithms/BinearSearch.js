// Binary Search

let nums = [-1, 0, 3, 5, 9, 12], target = 9

var BinarySearch = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let middle = Math.floor((low + high) / 2)
        if (target === nums[middle]) {
            return middle; 
        } else if (target < nums[middle]) {
            high = middle - 1; 
        } else {
            low = middle + 1; 
        }
    }
    return -1;
}

console.log(BinarySearch(nums, target));