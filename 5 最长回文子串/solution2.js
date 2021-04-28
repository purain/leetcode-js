/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = s[0];
    let len = s.length;
    let dp = new Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len).fill(false);
        dp[i][i] = true;
    }
    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            if (j - i < 2) {
                dp[i][j] = s[i] === s[j]
            } else {
                dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]   
            }
            if (dp[i][j] && result.length < j - i + 1) {
                result = s.slice(i, j + 1)
            }
        }
    }
    console.log(dp)
    console.log(result)
    return result;
};

let str = 'aaabaaa';
longestPalindrome(str)