// Determine if String Halves Are Alike

let s = "book"

var halvesAreAlike = function (s) {
    let firstHalf = s.slice(0, s.length / 2)
    let secondHalf = s.slice(s.length / 2)
    let Firstcount = 0;
    let Secondcount = 0;
    for (let i = 0; i < firstHalf.length; i++) {
        if (('a e i o u A E I O U').includes(firstHalf[i])) {
            Firstcount++;
        }
        if (('a e i o u A E I O U').includes(secondHalf[i])) {
            Secondcount++;
        }
    }
    return Firstcount == Secondcount
};

console.log(halvesAreAlike(s));