// Maximum Population Year

let logs = [
    [1993, 1999],
    [2000, 2010]
]

var maximumPopulation = function (logs) {
    let array = new Array(101).fill(0);
    for (let i = 0; i < logs.length; i++) {
        let birthyear = logs[i][0];
        let deathyear = logs[i][1];
        array[birthyear - 1950]++;
        array[deathyear - 1950]--;
    }
    console.log(array);

    let maxPopulation = 0;
    let maxYear = 1950;
    let population = 0;
    for (let i = 0; i < array.length; i++) {
        population += array[i];
        if (population > maxPopulation) {
            maxPopulation = population;
            maxYear = i + 1950;
        }
    }

    return maxYear;
};

console.log(maximumPopulation(logs));