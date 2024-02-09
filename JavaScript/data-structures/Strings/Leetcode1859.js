// Sorting the Sentence

let s = "is2 sentence4 This1 a3"

var sortSentence = function (s) {
    let sArr = s.split(" ")
    let newArr = new Array(sArr.length - 1)
    for (let i = 0; i < sArr.length; i++) {
        let number = sArr[i].slice(-1)
        newArr[number-1] = sArr[i].slice(0,-1)
    }

    return newArr.join(" ");
};

console.log(sortSentence(s));