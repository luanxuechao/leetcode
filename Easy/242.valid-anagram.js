/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let len = s.length;
    let map = {};
    s.split('').map((key)=>{return map[key] =map[key]?map[key]+1:1});
    t.split('').map((key)=>{return map[key] =map[key]?map[key]-1:-1});
    

    return Object.keys(map).every((key)=> {return map[key] ===0});
};
