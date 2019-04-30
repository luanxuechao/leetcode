/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = Number.parseInt(n.toString(2).split("").reverse().join("").padEnd(32, "0"),2);
    // console.log(n);
    return n
    
};
reverseBits(11111111111111111111111111111101)
