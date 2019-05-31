/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum =0;
    let totalCount = 0;
    for(let i in nums){
        sum += nums[i];
        totalCount +=Number(i); 
        
    }
    totalCount += nums.length;
    return totalCount -sum ;
};
