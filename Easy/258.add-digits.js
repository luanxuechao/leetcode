/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num =num+"";
    while(num.length >1){
        num=num.split("").reduce((total,num)=>{
            return parseInt(total)+parseInt(num);
        })

        num =num+"";
    }
    return parseInt(num);
};


