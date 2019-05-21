/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head) return true

    let pointer = head
    while (head.next && head.next.next) {
        pointer.next.prev = pointer
        pointer = pointer.next
        head = head.next.next
    }

    head = head.next ? pointer.next : pointer
    if (head.val !== pointer.val) return false

    while (head.next) {
        head = head.next
        pointer = pointer.prev
        if (head.val !== pointer.val) return false
    }
    if (pointer.prev) return false

    return true
}

