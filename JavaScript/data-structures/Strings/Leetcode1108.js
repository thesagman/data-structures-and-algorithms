// Defanging an IP Address

let address = "1.1.1.1"

var defangIPaddr = function (address) {
    let str = ""
    for (let i = 0; i < address.length; i++) {
        if ('.' == address[i]) {
            str += '[' + address[i] + ']'
        } else {
            str += address[i]
        }
    }

    return str;

};

console.log(defangIPaddr(address))