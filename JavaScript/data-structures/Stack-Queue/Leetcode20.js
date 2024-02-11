// Valid Parentheses

let s = "()"

var isValid = function (s) {
    let result = []
    let map = {
        ']': '[',
        '}': '{',
        ')': '('
    }
    for (let index = 0; index < s.length; index++) {
        if (s[index] == '(' || s[index] == '[' || s[index] == '{') {
            result.push(s[index])
        } else {
            if (result.length === 0 || map[s[index]] !== result[result.length - 1]) {
                return false;
            }
            result.pop()
        }
    }
    return result.length == 0;
};

console.log(isValid(s));