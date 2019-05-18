/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root;
    // let tmp = root.right;
    // root.right = root.left;
    // root.left = tmp;
    function invert(node){
        if(!node) return;
        let left = node.left;
        let right = node.right;
        node.right = left;
        node.left = right;
        invert(node.left);
        invert(node.right);
    }
    invert(root);
    // invert(root.left);
    return root;
};

