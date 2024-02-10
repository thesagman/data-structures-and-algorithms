// Length of Last Word

let s = "   fly me   to   the moon  "

var lengthOfLastWord = function (s) {
    let end = s.length - 1;
    let count = 0;

    while (s[end] == ' ' && end >= 0) {
        end--;
    }
    while (s[end] !== ' ' && end >= 0) {
        count++;
        end--;
    }
    return count;
};

console.log(lengthOfLastWord(s));