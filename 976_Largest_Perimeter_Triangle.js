/**
 * Given an integer array nums, 
 * return the largest perimeter of a triangle with a non-zero area, 
 * formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, 
 * return 0.

 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {
    nums.sort((a, b) => a-b);
    while(nums.length > 2) {
        if (nums[nums.length -1] < nums[nums.length -2] + nums[nums.length - 3]) {
            return nums[nums.length -1] + nums[nums.length -2] + nums[nums.length -3]
        }
        nums.pop();
    }

    return 0;  
};