/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const len = nums.length;
    // 长度小于 2 直接 false
    if (len < 2) {
    	return false;
    }
    const sum =  nums.reduce((a, b) => a + b, 0);
    // 单数直接 false
    if (sum & 1) {
    	return false;
    }

    // 初始化数组
    const dp = new Array(sum / 2 + 1).fill(false);
    dp[0] = true;

    // 核心
    for (let i = 0; i < len; i++) {
        for (let j = sum / 2; j >= 0 && j - nums[i] >= 0; j--) {
            dp[j] = dp[j] || dp[j - nums[i]] || false;
            if (dp[sum / 2]) {
                return true;
            }
        }
    }
    return dp[sum / 2];
};

const list = [1, 2, 5];
console.log(canPartition(list))