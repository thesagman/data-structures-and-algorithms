// Valid Palindrome II

let s = "abca";

function isPalindrome(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

var validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        if (s[start] !== s[end]) {
            // Try removing either character at start or end
            return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);
        }
        start++;
        end--;
    }
    
    return true;
};

console.log(validPalindrome(s));