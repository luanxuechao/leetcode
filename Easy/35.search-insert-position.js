/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (40.44%)
 * Total Accepted:    366.4K
 * Total Submissions: 905.2K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * 
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,3,5,6], 2
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [1,3,5,6], 7
 * Output: 4
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: [1,3,5,6], 0
 * Output: 0
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     let index = 0;
//     if(target ===0){
//         return index;
//     }
//     index = nums.indexOf(target)
//     if(index>-1){
//         return index;
//     }
    
//    while(target>0){
//     index = nums.indexOf(target)
//     if(index >-1){
//         target =0;
//     }else {
//         --target;
//     }
//    }
//    return index+1;
// };
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
  
      if (target === nums[mid]) return mid
      else if (nums[mid] > target) right = mid - 1
      else left = mid + 1
    }
  
    return left
  };
console.log(searchInsert([1,3,5,6],2))
