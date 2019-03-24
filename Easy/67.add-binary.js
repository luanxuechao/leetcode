/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (37.70%)
 * Total Accepted:    283K
 * Total Submissions: 740.2K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i=a.length-1;
  let j = b.length-1;
    let pre =0;
    let array=[];
    while(i>=0||j>=0){
        let currentVlue=0;
        let sum =Number(i>=0?a.substr(i--,1):0)+ Number(j>=0?b.substr(j--,1):0)+pre;
        parseInt(sum/2)>0?pre=1:pre=0;
        currentVlue = parseInt(sum/2)>0?sum%2:sum;
        array.push(currentVlue);
    }
    if(pre>0)array.push(pre);
    array.reverse();
    return array.toString().replace(/,/g,'');
};
