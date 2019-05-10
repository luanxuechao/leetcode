/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head && head.val === val){
        head = head.next;
    }
    if(!head) return head;
    let current = head;
    while(current.next !== null){
        if(current.next.val === val){
            current.next = current.next.next
        }else {
            current=current.next;
        }
    }
    return head;
};

