// Count Items Matching a Rule

let items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"]
]

let ruleKey = "color"
let ruleValue = "silver"

var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;
    let index;
    if (ruleKey == "type") {
        index = 0;
    } else if (ruleKey == "color") {
        index = 1;
    } else if (ruleKey == "name") {
        index = 2;
    }
    for (let i = 0; i < items.length; i++) {
        if (ruleValue === items[i][index]) {
            count++;
        }
    }
    return count;
};

console.log(countMatches(items, ruleKey, ruleValue));