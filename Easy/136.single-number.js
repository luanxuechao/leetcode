/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * algorithms
 * Easy (59.42%)
 * Total Accepted:    442.2K
 * Total Submissions: 741.7K
 * Testcase Example:  '[2,2,1]'
 *
 * Given a non-empty array of integers, every element appears twice except for
 * one. Find that single one.
 * 
 * Note:
 * 
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 * 
 * Example 1:
 * 
 * 
 * Input: [2,2,1]
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,1,2,1,2]
 * Output: 4
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     if(nums.length ===1) return nums[0];
//     let map = new Map();
//     nums.map(num=>{
//         let isbe=  map.has(num);
//         if(isbe){
//             map.set(num,map.get(num)+1)
//         }else{
//             map.set(num,1);
//         }
//     });
//     for (let key of map.keys()) {
//        if(map.get(key) === 1){
//         return key;
//        }
//       }    
// };
var singleNumber = function(nums) {
    return nums.reduce((a, b) => a^b);
};
console.log(singleNumber([4,1,2,1,2]));

