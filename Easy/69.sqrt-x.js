/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (30.88%)
 * Total Accepted:    341.5K
 * Total Submissions: 1.1M
 * Testcase Example:  '4'
 *
 * Implement int sqrt(int x).
 * 
 * Compute and return the square root of x, where x is guaranteed to be a
 * non-negative integer.
 * 
 * Since the return type is an integer, the decimal digits are truncated and
 * only the integer part of the result is returned.
 * 
 * Example 1:
 * 
 * 
 * Input: 4
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since 
 * the decimal part is truncated, 2 is returned.
 * 
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
// by me
// var mySqrt = function(x) {
//     if(x<=1){
//         return Math.floor(x);
//     }
//     let n =1;
//     while(n*n<=x) {
//         n++;
//     }
//     return n-1;
// };
// by network friends
var mySqrt = function(x) {
    if (x === 0)
        return 0;
    
    let left = 0;
    let right = x;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sq = mid * mid;
        if (sq === x || ((sq < x) && (mid+1)*(mid+1) > x))
            return mid;
        if (sq > x) right = mid - 1;
        if (sq < x) left = mid + 1;
    }
    
    return -1;
};
console.log(mySqrt(8));

