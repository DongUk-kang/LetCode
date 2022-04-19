/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
   let left = 0;
   let right = nums.length; 
   let res = [];
   while (left < right) {
       let numsLeft = nums[left] * nums[left];
       let numnsRight = nums[right - 1] * nums[right - 1];
       if (numsLeft > numnsRight) {
           res.unshift(numsLeft);
           left ++;
       } else {
           res.unshift(numnsRight);
           right --;
       }
   }
   return res;
};