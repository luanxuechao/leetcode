/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let result =0;
    while(n>1){
        result += parseInt(n/5);
        n/=5
    }
    return result;
};

