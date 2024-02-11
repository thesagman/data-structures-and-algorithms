// Remove All Adjacent Duplicates In String

s = "azxxzy"

var removeDuplicates = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == stack[stack.length - 1]) {
            stack.pop()
            continue;
        } else {
            stack.push(s[i])
        }


    }
    return stack.join('');
};

console.log(removeDuplicates(s));