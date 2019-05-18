/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.data= [];
    this.length = 0;
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.data.push(x);
    this.length++;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.length === 0) return null;
    this.length--;
    return this.data.splice(this.length,1);
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.length === 0) return null;
   return  this.data[this.length-1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !!!this.length
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// var obj = new MyStack()
//   obj.push(1)
//   obj.push(2)
//  var param_2 = obj.top()
//  var param_3 = obj.pop()
//   var param_4 = obj.empty()
// console.log(param_4);
