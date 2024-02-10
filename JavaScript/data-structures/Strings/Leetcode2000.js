// Reverse Prefix of Word

let word = "abcdefd", ch = "d"

function reverse(start, end, word) {
    let newStr = ""
    for (let i = start; i <= end; i++) {
        newStr += word[end - i]
    }

    return newStr;
}

var reversePrefix = function (word, ch) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == ch) {
            let prefix = reverse(0, i, word);
            let suffix = word.substring(i + 1);
            return prefix + suffix;
        }
    }

    return word;
};

console.log(reversePrefix(word, ch));