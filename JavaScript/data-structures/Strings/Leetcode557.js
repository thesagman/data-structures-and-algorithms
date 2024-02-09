// Reverse Words in a String III

let s = "Let's take LeetCode contest"

var reverseWords = function (s) {
    let newArr = s.split(" ");
    let newStr = "";
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            newStr += newArr[i][newArr[i].length - 1 - j];
        }
        if (i !== newArr.length - 1) {
            newStr += " ";
        }
    }
    return newStr;
};

console.log(reverseWords(s));