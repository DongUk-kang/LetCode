/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.


 */


/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let curr = 0;
    let l = 0;
    let size = nums.length;
    while (l < size + 1) {
        if (nums[l] === 1) {
            curr ++;
            l++
        } else {
            max = max < curr ? curr : max;
            curr = 0;
            l++;
        }
    }
    return max;
};