/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
	// 计算和
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	// 初始化
	const array = new Array(nums.length).fill(0);
	const arrayLen = sum * 2 + 1;
	for (let i = -0; i < nums.length; i++) {
		array[i] = new Array(arrayLen).fill(0)
	}

	// 初始化第一行，如果nums[0]为0，则不管加减0都为0，array[0][sum]要置为2
	if (nums[0] === 0) {
		array[0][sum] = 2
	} else {
	    array[0][sum - nums[0]] = 1;
		array[0][sum + nums[0]] = 1;
	}

	// 状态转移
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < arrayLen; j++) {
			let left = array[i - 1][j - nums[i]] || 0;
			let right = array[i - 1][j + nums[i]] || 0;
			array[i][j] = left + right;
		}
	}

    return array[nums.length - 1][sum + S] || 0
};
const array = [0, 1]
console.log(findTargetSumWays(array, 1))