/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (39.31%)
 * Total Accepted:    262.1K
 * Total Submissions: 661.3K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 * 
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * Given an integer n where 1 ≤ n ≤ 30, generate the n^th term of the
 * count-and-say sequence.
 * 
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "1"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 4
 * Output: "1211"
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
// 不理解该题目
function countAndSay(n) {
    if (n === 1) {
      return '1';
    }
    return getSequence(countAndSay(n - 1));
  }
  
  /**
   * @param {string} prevSequence 
   */
  function getSequence(prevSequence) {
    let solution = '';
    for (let i = 0; i < prevSequence.length;) {
      let count = 1;
      const digit = prevSequence.charAt(i);
  
      // Count right until next digit is different
      while (digit === prevSequence.charAt(i + count)) {
        count += 1;
      }
  
      solution += `${count}${digit}`;
      i += count; // skip over the digits we counted
    }
    return solution;
  }
console.log(countAndSay(5));
