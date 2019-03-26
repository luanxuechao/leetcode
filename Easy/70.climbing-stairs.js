/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (43.69%)
 * Total Accepted:    371.6K
 * Total Submissions: 850.4K
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step 3
 * 2. 1 step + 2 steps   2 
 * 3. 2 steps + 1 step  1
 * 4 
 * 1 1 1 1  4
 * 1 2 1    3
 * 2 1 1
 * 1 1 2
 * 2 2    1
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     if (n < 4) return n;
//     return (climbStairs(n - 1) + climbStairs(n -2));
// }
var climbStairs = function(n) {
	let steps = [1 ,1];
	for (let i = 2; i < n + 1; i++) {
		steps.push(steps[i - 1] + steps[i -2]);
	}
	return steps[n];
}
console.log(climbStairs(42))
