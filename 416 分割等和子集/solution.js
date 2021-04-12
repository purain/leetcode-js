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
    const dp = new Array(len).fill([]);
    for (let i = 0; i < len; i++) {
    	dp[i] = new Array(sum / 2 + 1).fill(false);
    }
    dp[0][0] = true;
    if (nums[0] <= sum / 2) {
        dp[0][nums[0]]= true;	
    }

    // 核心
    for (let i = 1; i < len; i++) {
    	for (let j = 0; j < sum / 2 + 1; j++) {
    		// 比当前值小时，继承上侧
    		if (j - nums[i] < 0) {
    		    dp[i][j] = dp[i - 1][j];
                continue;
    		}
    		// 比当前值大时，继承上侧或 dp[i - 1][j - nums[i]]
            dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
    	}
    }
    return dp[len - 1][sum / 2];
};

const list = [2, 2, 1, 1];
console.log(canPartition(list))