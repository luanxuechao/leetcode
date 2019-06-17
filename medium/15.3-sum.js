/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results =[];
    const target =0
    if (nums.length < 3) return results;
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i<nums.length-2;i++){
        if (nums[i] > target) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let j =i +1;
        let k = nums.length-1
        while (j<k){
           let count = nums[i]+ nums[j]+nums[k];
            if(target === count){
                results.push([nums[i],nums[j],nums[k]]);
                while (nums[j] === nums[j + 1]) j++
                while (nums[k] === nums[k - 1]) k--
                j++;
				k--;
            }else if(target > count){
                j++
            }else {
                k--;
            }
        }
    }
    return results;
}
