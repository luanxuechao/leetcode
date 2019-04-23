/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let strs = s.split("");
    let res=0;
    let s_length = strs.length
    for(let i in strs){
        res +=(strs[i].charCodeAt(0)-64)*Math.pow(26,s_length-i-1);
    }
    return res;
};

