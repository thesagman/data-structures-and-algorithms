// Reverse Bits

let n = 0b00000010100101000001111010011100;

var reverseBits = function (n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        let bit = (n >>> i) & 1;
        res = res | (bit << (31 - i))
    }
    return res >>> 0;
};

console.log(reverseBits(n));