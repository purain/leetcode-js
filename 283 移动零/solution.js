/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let j = i + 1;
        if (nums[i] === 0) {
            while (nums[j] === 0 && j < nums.length - 1) {
                j++;
            }
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    return nums;
};
let arr = [0, 1, 0, 3, 12, 0];
console.log(moveZeroes(arr))