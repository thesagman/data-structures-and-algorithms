// Find the Index of the First Occurrence in a String

let haystack = "rtrsadbutsad"
let needle = "sad"

var strStr = function (haystack, needle) {
    if (haystack.includes(needle)) {
        return haystack.indexOf(needle)
    } else {
        return -1;
    }
};

console.log(strStr(haystack, needle));