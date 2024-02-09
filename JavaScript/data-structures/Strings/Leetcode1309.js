// Decrypt String from Alphabet to Integer Mapping

let s = "10#11#12"

var freqAlphabets = function (s) {
    let str = ""
    for (let i = 0; i < s.length;) {
        console.log(s[i]);
        if (s[i + 2] == '#') {
            str += String.fromCharCode(parseInt(s[i] + s[i + 1]) + 96)
            i = i + 3;
        } else {
            str += String.fromCharCode(parseInt(s[i]) + 96)
            i = i + 1;
        }
    }
    return str;
};

console.log(freqAlphabets(s));