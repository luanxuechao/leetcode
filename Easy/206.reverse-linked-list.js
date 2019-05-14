/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let list = head;
    let p =list;
    let q =null;
    if(list== null){
        return null;
    }
    while (p.next != null){
        q = p.next;
        p.next = q.next;
        q.next =list 
        list =q;
    }
    return list;
};

