// Merge Strings Alternately

let word1 = "ab", word2 = "pqrs"

var mergeAlternately = function (word1, word2) {
    let newStr = ""
    let minLength = word1.length < word2.length ? word1.length : word2.length;

    for (let i = 0; i < minLength; i++) {
        newStr += word1[i] + word2[i];
    }
    if (word1.length > word2.length) {
        newStr += word1.substring(minLength);
    } else if (word2.length > word1.length) {
        newStr += word2.substring(minLength);
    }

    return newStr;
};

console.log(mergeAlternately(word1, word2));