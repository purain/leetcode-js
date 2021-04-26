/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
    	if (i > 0 && nums[i] === nums[i - 1]) {
    		continue;
    	}
    	let k = nums.length - 1;
    	for (let j = i + 1; j < nums.length - 1; j++) {
    		if (j > i + 1 && nums[j] === nums[j - 1]) {
    			continue;
    		}
    		while (j < k && nums[i] + nums[j] + nums[k] > 0) {
    			k--;
    		}
    		if (j === k) {
    			break;
    		}
    		
            if (nums[i] + nums[j] + nums[k] === 0) {
            	result.push([nums[i], nums[j], nums[k]])
            }
    	}
    }
    return result;
};

let arr = [-1,0,1,2,-1,-4];
console.log(threeSum(arr))