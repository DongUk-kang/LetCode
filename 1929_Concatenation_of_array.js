/*
Given an integer array nums of length n, you want to create an array
an array and of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenatuon of two nums arrays 
Return the array ans
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    return [...nums, ...nums]
};