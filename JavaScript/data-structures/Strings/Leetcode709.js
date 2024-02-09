// To Lower Case

let s = "Hello"

var toLowerCase = function (s) {
    let newS = ""
    for (let i = 0; i < s.length; i++) {
        if (65 <= s.charCodeAt(i) && s.charCodeAt(i) <= 90) {
            newS += String.fromCharCode(s.charCodeAt(i) + 32);
        } else {
            newS += s[i]
        }
    }
    return newS
};

console.log(toLowerCase(s));