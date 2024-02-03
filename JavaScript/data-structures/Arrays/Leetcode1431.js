// Kids With the Greatest Number of Candies

let candies = [2, 3, 5, 1, 3]
let extraCandies = 3


var kidsWithCandies = function (candies, extraCandies) {
    let boolarr = new Array(candies.length)
    let max = 0;
    for (let i = 0; i < candies.length; i++) {
        if (max < candies[i]) {
            max = candies[i];
        }
    }
    for (let i = 0; i < candies.length; i++) {
        let newCandyCollection = candies[i] + extraCandies;
        if (newCandyCollection >= max) {
            boolarr[i] = true
        } else {
            boolarr[i] = false;
        }
    }
    return boolarr
};

console.log(kidsWithCandies(candies, extraCandies));