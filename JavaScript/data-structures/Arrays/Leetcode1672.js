// Richest Customer Wealth

let accounts = [
    [1, 2, 3],
    [3, 2, 1]
]

var maximumWealth = function (accounts) {
    let wealth = new Array(accounts.length).fill(0)
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            wealth[i] += accounts[i][j]
        }
    }
    let maximum = wealth[0]
    for (let i = 0; i < wealth.length; i++) {
        if (maximum > wealth[i]) {
            maximum = maximum
        } else {
            maximum = wealth[i]
        }
    }
    return maximum;
};

console.log(maximumWealth(accounts));