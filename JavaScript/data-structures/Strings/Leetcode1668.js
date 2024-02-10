// Maximum Repeating Substring

let sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba", word = "aaaba"

var maxRepeating = function (sequence, word) {
    let count = 0;
    let tbf = word;
    if (sequence.length < word.length) {
        return 0;
    }
    if (sequence.length == 1 && word.length == 1) {
        if (sequence[0] == word[0]) {
            return 1;
        }
    }
    while(sequence.includes(tbf)){
        tbf += word;
        count++
    }
    return count++;
};

console.log(maxRepeating(sequence, word));