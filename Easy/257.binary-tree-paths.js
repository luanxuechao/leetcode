/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result =[];
    function findPath(node,path){
        if(!node){
            return ;
        } else{
            path +=node.val;
        }
        if(!node.left && !node.right){
            return result.push(path);
        } else{
            path += '->';
        }
        if(node.left) {
            findPath(node.left, path);
        }
        
        if(node.right) {
            findPath(node.right, path);
        }

    }
    findPath(root, "");
    return result;
};

