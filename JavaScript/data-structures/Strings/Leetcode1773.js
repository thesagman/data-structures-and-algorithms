// Count Items Matching a Rule

let items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]]
let ruleKey = "color"
let ruleValue = "silver"

var countMatches = function (items, ruleKey, ruleValue) {
let count = 0;
    for (let i = 0; i < items.length; i++) {
        if (ruleKey == "type" && items[i][0] == ruleValue) {
            count++;
        } else if (ruleKey == "color" && items[i][1] == ruleValue) {
            count++;
        } else if (ruleKey == "name" && items[i][2] == ruleValue) {
            count++;
        }
    }
    return count;
};

console.log(countMatches(items, ruleKey, ruleValue));