/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 *
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (28.79%)
 * Total Accepted:    168.7K
 * Total Submissions: 585.9K
 * Testcase Example:  '1'
 *
 * Given a positive integer, return its corresponding column title as appear in
 * an Excel sheet.
 * 
 * For example:
 * 
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "A"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 28
 * Output: "AB"
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 701
 * Output: "ZY"
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if(n <= 26){
        return String.fromCharCode(65 + n - 1);
    }
    let quotient = Math.floor(n / 26);
    let remainder = n % 26;
    if(remainder === 0){
        remainder = 26;
        quotient--;
    }
    let result = '';
    result += convertToTitle(quotient) + String.fromCharCode(65 + remainder - 1);
    return result;
};
console.log(convertToTitle(26));

