// Check If Two String Arrays are Equivalent

let word1 = ["ab", "c"]
let word2 = ["a", "bc"]

var arrayStringsAreEqual = function (word1, word2) {
    let word1String = "";
    let word2String = "";
    for (let i = 0; i < word1.length; i++) {
        word1String += word1[i];
    }

    for (let i = 0; i < word2.length; i++) {
        word2String += word2[i];
    }
    return word1String == word2String
};

console.log(arrayStringsAreEqual(word1, word2));