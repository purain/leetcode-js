/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i]
            j++;
        }
    }
    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};
let arr = [0, 1, 0, 3, 12, 0, 1];
console.log(moveZeroes(arr))

var moveZeroes2 = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }
    return nums;
};