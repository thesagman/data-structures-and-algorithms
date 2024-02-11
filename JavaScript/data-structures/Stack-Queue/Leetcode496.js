// Next Greater Element I

let nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]

var nextGreaterElement = function (nums1, nums2) {
    let result = [];

    for (let i = 0; i < nums1.length; i++) {
        let found = false;
        let index = nums2.indexOf(nums1[i]);

        for (let j = index + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                result.push(nums2[j]);
                found = true;
                break;
            }
        }

        if (!found) {
            result.push(-1);
        }
    }

    return result;
};

console.log(nextGreaterElement(nums1, nums2));