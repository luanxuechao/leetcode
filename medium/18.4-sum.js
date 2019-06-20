/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums) {
    const results =[];
    const target =0;
    if (nums.length < 4) return results;

    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i<nums.length-3;i++){

        if (nums[i] > target) break;

        if (i > 0 && nums[i] === nums[i - 1]) continue

        for (let m=i+1;m<nums.length-2;m++){

            if (m !== i + 1 && nums[m] === nums[m - 1]) continue

            let j =m +1;

            let k = nums.length-1;

            while (j<k){
                let count = nums[i]+ nums[j]+nums[k]+nums[m];
                 if(target === count){
                     results.push([nums[i],nums[m],nums[j],nums[k]]);
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
       
    }
    return results;
    //  const target =0
    
}
console.log(fourSum([0,0,0,0]))
