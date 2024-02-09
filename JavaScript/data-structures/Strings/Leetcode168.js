// Excel Sheet Column Title

let columnNumber = 702

console.log(1014 % 26);

var convertToTitle = function (columnNumber) {
    let str = "";

    while (columnNumber > 0) {
        let remainder = (columnNumber - 1) % 26;
        str = String.fromCharCode(remainder + 65) + str;
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }

    return str;
};

console.log(convertToTitle(columnNumber));