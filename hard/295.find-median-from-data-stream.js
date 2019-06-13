/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 */
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
   this.ary=[];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let low = 0;
    let high = this.ary.length-1;
    while(low <= high)
    {
        let mid = Math.floor((high+low)/2)
        if(this.ary[mid]  < num)
            {
                low = mid+1;
            }
        else
            {
                 high =mid-1;
            }
        
    }
    this.ary.splice(low, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.ary.length % 2 ==0)
        {
            var mid = this.ary.length/2;
            return (this.ary[mid] + this.ary[mid-1])/2;
        }
    else
        {
            var mid = Math.floor(this.ary.length/2);
            return (this.ary[mid]);
        }

};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
