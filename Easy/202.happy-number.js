/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var set = new Set();
    while (n != 1) {
        set.add(n);
        n = n.toString().split("").reduce((sum,a)=>sum+a*a,0)
        if(set.has(n))
        return false
    }
    return true;
};

