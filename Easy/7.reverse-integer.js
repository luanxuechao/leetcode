/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.09%)
 * Total Accepted:    600.7K
 * Total Submissions: 2.4M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xStr =x.toString();
    if(x === 0){
        return 0;
    }
    let isMinus= false;
    if(xStr.indexOf('-')>-1){
        isMinus = true;
        xStr = xStr.substr(1,xStr.length);
    }
    let arr = xStr.split('');
    let result = '';
    let isFirstZero = false;
    while(arr.length >0){
        let item = arr.pop();
        if(item ==='0' && result.length===0){
            isFirstZero = true;
        }else {
            isFirstZero = false;
        }
        if(!isFirstZero){
            result =result.toString()+item.toString();
        }
    };
    if(isMinus){
        result = '-'+result;
    }
    result = parseInt(result);
    if(result<-2147483648||result >2147483647){
        return 0;
    }
    return result;
};

