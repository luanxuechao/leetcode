/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let arr1 = pattern.split('');
    let arr2 = str.split(' ');
    if(arr1.length !== arr2.length){
        return false;
    }
    let len = arr1.length;
    for(let i =0;i<len;i++){
        if(arr2.indexOf(arr2[i]) !== arr1.indexOf(arr1[i])){
            return false;
        }
    }
    return true
};
// console.log(wordPattern('abba','dog cat cat fish'))
