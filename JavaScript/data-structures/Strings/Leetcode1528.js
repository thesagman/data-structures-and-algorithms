// Shuffle String

let s = "codeleet"
let indices = [4, 5, 6, 7, 0, 1, 2, 3]

var restoreString = function (s, indices) {
     let strings = ""
     for (let i = 0; i < s.length; i++) {
         strings += s[indices[i]]
     }

     return strings;
};

console.log(restoreString(s,indices));