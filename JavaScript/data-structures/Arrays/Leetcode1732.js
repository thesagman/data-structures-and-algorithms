// Find the Highest Altitude

let gain = [-5, 1, 5, 0, -7]

var largestAltitude = function (gain) {
    let Altitude = new Array(gain.length + 1).fill(0)
    let sum = 0;
    for (let i = 0; i < gain.length; i++) {
        sum += gain[i];
        Altitude[i + 1] = sum;
    }
    let max = Math.max(...Altitude)
    return max;

};

console.log(largestAltitude(gain));