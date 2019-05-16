/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // for(let i in nums){
    //     if(nums[i] === nums[Number(i)+k]){
    //         return true
    //     }
    // }
    // return false;
    let map = new Map();
    for(let i=0, l=nums.length; i<l; i++){
        if(map.has(nums[i]) && i - map.get(nums[i]) <= k)
            return true;
        map.set(nums[i], i);
    }
    return false;
};
console.log(containsNearbyDuplicate([99,99],2))
