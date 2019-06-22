/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0;
  let map = new Map();
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  map.set(0,1);
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i] - k)) {
        count += map.get(nums[i] - k);
    }
    if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1);
    } else {
        map.set(nums[i], 1);
    }

}
console.log(map);
return count;
}
console.log(subarraySum([1,2,3,4,5,6,7,8,9],10))
