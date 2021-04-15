/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let count = 0;
	const digui = (nums, S, curSum, curIdx) => {
		if (curIdx === nums.length) {
			if (curSum === S) {
				count++;
			}
	        return;
		}

		digui(nums, S, curSum + nums[curIdx], curIdx + 1);
		digui(nums, S, curSum - nums[curIdx], curIdx + 1);
	}
	digui(nums, S, 0, 0);
	return count;
};