/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (45.03%)
 * Total Accepted:    238.9K
 * Total Submissions: 528.8K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 5
 * Output:
 * [
 * ⁠    [1],1
 * ⁠   [1,1],2
 * ⁠  [1,2,1],3
 * ⁠ [1,3,3,1],4
 * ⁠[1,4,6,4,1]5
 * [1,5,10,10,5,1]6
 * ]
 * 
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 0)return [];
    if(numRows == 1)return [[1]];
    if(numRows == 2)return [[1], [1, 1]];
    let ret = [[1], [1, 1]];
    for(let i = 2; i < numRows; i++){
        ret[i] = new Array();
        ret[i].push(1);
        for(var j = 1; j < i; j++){
            ret[i].push(ret[i - 1][j - 1] + ret[i - 1][j]);
        }
        ret[i].push(1);
    }
    return ret;
};

