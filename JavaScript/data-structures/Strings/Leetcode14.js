// Longest Common Prefix

let strs = ["flower", "flow", "flight"]

var longestCommonPrefix = function (strs) {
    if (strs.length == 0) {
        return ""
    }
    let longestCP = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(longestCP) !== 0) {
            longestCP = longestCP.substring(0, longestCP.length - 1)
        }
    }
    return longestCP;
};

console.log(longestCommonPrefix(strs));