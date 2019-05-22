/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/*
首先要先确定给的两个node是否都在tree里，如果都在tree里的话，
就可以分成3种情况，第一种情况是两个节点是在公共祖先的左右两侧，
第二种情况是都在树的左侧，第三种情况是都在树的右侧，如果是第二
，第三种情况的话，公共祖先就在给定的两个点中比较上面的那一个。
如果转换成代码的话，从上往下走，base case分为3种
，判断遇到了p就直接返回p，遇到q就直接返回q，
不用向下做了。如果left,right都不为空，就返回root自己；
left,right哪一个不为空就返回哪个，整个recursion做完就可以得到LCA。
*/


var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null
    if(root == p) return p;
    if(root == q) return q;
    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);
    if(left != null && right != null) return root;
    return left != null ? left : right;
};

