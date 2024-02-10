// Valid Palindrome

let s = "A man, a plan, a canal: Panama"


var isPalindrome = function (s) {
    if (s.length < 2) {
        return true
    }
    const cleanedString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Check if the cleaned string is a palindrome
    for (let i = 0; i < Math.floor(cleanedString.length / 2); i++) {
        if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(s));