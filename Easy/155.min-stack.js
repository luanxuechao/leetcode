/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 *
 * https://leetcode.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (36.13%)
 * Total Accepted:    286.9K
 * Total Submissions: 787.3K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 * 
 * 
 * push(x) -- Push element x onto stack.
 * 
 * 
 * pop() -- Removes the element on top of the stack.
 * 
 * 
 * top() -- Get the top element.
 * 
 * 
 * getMin() -- Retrieve the minimum element in the stack.
 * 
 * 
 * 
 * 
 * Example:
 * 
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 * 
 * 
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.dataStore = [];
    this.min = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.dataStore.push(x);
    if(this.min > x || this.min===null){
        this.min = x;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped = this.dataStore.pop();
    if (this.min === popped) {
        this.min = Math.min(...this.dataStore);
    }
    return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.dataStore[this.dataStore.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
        return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

