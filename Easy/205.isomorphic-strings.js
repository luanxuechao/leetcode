/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    let len = s.length;
    let list1= s.split('');
    let list2 =t.split('');
    for(let i = 0; i<len;i++){
        if(list1.indexOf(list1[i]) === list2.indexOf(list2[i])){
            continue;
        }
        return false;
    }

    return true;
};
