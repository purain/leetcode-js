/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
    	let j = 0;
    	while (i - j >= 0 && i + j <= s.length && s[i - j] === s[i + j]) {
    		j++;
    	}
    	let temp1 = s.slice(i - j + 1, i + j + 1 - 1);
    	if (result.length < temp1.length) {
    		result = temp1;
    	}

        if (s[i] === s[i + 1]) {
        	let j = 0;
	    	while (i - j >= 0 && i + j + 1 <= s.length && s[i - j] === s[i + j + 1]) {
	    		j++;
	    	}
	    	let temp2 = s.slice(i - j + 1, i + j + 2 - 1);
	    	if (result.length < temp2.length) {
	    		result = temp2;
	    	}
        }
    }
    return result;
};

let s1 = 'aba';
// console.log(longestPalindrome(s1))
let s2 = 'cbbd';
console.log(longestPalindrome(s2))