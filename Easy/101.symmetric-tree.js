/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (42.54%)
 * Total Accepted:    373.8K
 * Total Submissions: 869.9K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 * 
 * 
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * But the following [1,2,2,null,3,null,3]  is not:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;
    let isSymmetricFuc = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        return (isSymmetricFuc(left.left, right.right) && isSymmetricFuc(left.right, right.left));
    }
    return isSymmetricFuc(root.left, root.right)

};

// let isSymmetric = function (root) {
//     if (!root) return true;

//     let isSymmetricHelper = (left, right) => {
//         if (!left && !right) return true;
//         if (!left || !right) return false;
//         if (left.val !== right.val) return false;

//         return (isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left));
//     }
//     return isSymmetricHelper(root.left, root.right);
// };