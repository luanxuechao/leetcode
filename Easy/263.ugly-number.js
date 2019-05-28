/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num === 0) return false;
    while(num%2  === 0 || num%3 === 0 || num %5 === 0){
         num =num%2 ===0 ? num/2 : (num%3 === 0 ? num/3:(num%5 === 0?num/5:num ));
           }
    return num===1;
};
 // newwork solutions
const isUgly = num => {
    while (num > 1) {
        if (num % 2 === 0) { num = num / 2 | 0; }
        else if (num % 3 === 0) { num = num / 3 | 0; }
        else if (num % 5 === 0) { num = num / 5 | 0; }
        else { break; }
    }
    return num === 1;
};
