/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let result =0;
    n.toString(2).split("").map((item)=>{
        if(item ==="1"){
            result++
        }
    })
    return result;
};
hammingWeight(0);
