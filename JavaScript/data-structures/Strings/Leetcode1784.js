// Check if Binary String Has at Most One Segment of Ones

let s = "1001"

var checkOnesSegment = function (s) {
    let foundZero = false;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '0') {
            foundZero = true;
        }
        if (foundZero && s[i] === '1') {
            return false;
        }
    }
    return true;
};

console.log(checkOnesSegment(s));