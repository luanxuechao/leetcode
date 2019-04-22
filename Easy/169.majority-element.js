/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (52.14%)
 * Total Accepted:    369.3K
 * Total Submissions: 707.8K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length ===1){
        return nums[0]
    }
    let map = new Map()
    nums.forEach((num)=>{
        if(map.get(num)){
            map.set(num,map.get(num)+1)
        }else {
            map.set(num,1)
        }
    });
    let size = nums.length/2;
    for (let key of map.keys()) {
       if(map.get(key)>size){
        return key;
       }
    }
};
// var majorityElement = function(nums) {
//     nums.sort();
//     const i = Math.floor(nums.length/2);
//     return nums[i];
// };
console.log(majorityElement([2,2,1,1,1,2,2]))
