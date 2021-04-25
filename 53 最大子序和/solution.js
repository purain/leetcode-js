/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let maxSum = nums[0];
	let curSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
    	curSum = Math.max(nums[i], nums[i] + curSum);
    	maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
};

let arr = [-2,1,-4, -5-3,4,-1,2,1,-5,4]
console.log(maxSubArray(arr))