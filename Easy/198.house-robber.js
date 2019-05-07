/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 不理解题意
var rob = function(nums) {
   let vMissed =0;
   let vChosen =0;
   let temp ;
   for (let i= 0;i<nums.length;i++){
       temp =Math.max(vMissed,vChosen);
       vChosen = vMissed+nums[i];
       vMissed =temp;
       console.log(vMissed,vChosen)

   }
    return Math.max(vMissed,vChosen);
};
rob([1,2,3,1])
