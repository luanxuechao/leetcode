 /*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (35.76%)
 * Total Accepted:    515.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// by lxc
var isValid = function(s) {
    let lastLength = 0;
    while(s.length>0 && lastLength !== s.length){
        lastLength =s.length;
         s= s.replace('()',1)
                     .replace('{}',2)
                     .replace('[]',3).replace(/\d+/g,''); 
    }
    return s.length?false:true;  
};
// by leetcode 
// var map = {
//     "(": ")",
//     "[": "]",
//     "{": "}"
// } 

// var isValid = function(s) {
//     var stack = [];
    
//     for (var i = 0; i < s.length; i++) {
//         var el = s[i];
        
//         if (map[el]) {
//             stack.push(map[el]);
//         } else {
//             if (el !== stack.pop()) {
//                 return false;
//             }
//         }
//     }
    
//     return stack.length === 0;
// };
