// Long Pressed Name

let name = "leelee"
let typed = "lleeelee"

var isLongPressedName = function (name, typed) {
    let i = 0;
    let j = 0;

    while (j < typed.length) {
        if (i < name.length && name[i] === typed[j]) {
            i++;
            j++;
        } else if (typed[j] !== typed[j - 1]) {
            return false;
        } else {
            j++;
        }
    }

    return i === name.length;
};

console.log(isLongPressedName(name, typed));