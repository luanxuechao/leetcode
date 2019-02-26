/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.90%)
 * Total Accepted:    408.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0) return "";
    strs = strs.sort((a,b)=>{
        return a.length>b.length;
    });
    let prefix = JSON.parse(JSON.stringify(strs))[0];
    let isbe = false;
    let index =0;
    while(!isbe && strs[0].length-index >-1){
        prefix = prefix.substr(0,strs[0].length-index);
        let reg  = new RegExp('^'+prefix);
        isbe = strs.every(str =>{
            return !!str.match(reg);
        });
        index++;
    }
    return prefix;
};
// var longestCommonPrefix = function(strs) {
//     'use strict';
//     if (strs === undefined || strs.length === 0) { return ''; }
    
//     return strs.reduce((prev, next) => {
//         let i = 0;
//         while (prev[i] && next[i] && prev[i] === next[i]) i++;
//         return prev.slice(0, i);
//     });
// };
// var longestCommonPrefix = function(strs) {
//     let ret = '', i = 0, temp = strs[0];
//     if (temp) [...temp].forEach(c => ret += (strs.every(w => w[i] === temp[i]))? temp[i++] : '')
//     return ret;
// };
// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) {
//         return '';
//     }
//     var reducer = function (pre, cur) {
//         var str = '';
//         var l = Math.min(pre.length, cur.length);
//         for (var i = 0; i < l; i++){
//             if (pre[i] !== cur[i]) {
//                 break;
//             }
//             str+=pre[i];
//         }
//         return str;
//     }
//     return strs.reduce(reducer);
// };
longestCommonPrefix(["dog","racecar","car"]);
