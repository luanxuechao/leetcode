/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (46.62%)
 * Total Accepted:    466.6K
 * Total Submissions: 998.8K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * Say you have an array for which the i^th element is the price of a given
 * stock on day i.
 * 
 * If you were only permitted to complete at most one transaction (i.e., buy
 * one and sell one share of the stock), design an algorithm to find the
 * maximum profit.
 * 
 * Note that you cannot sell a stock before you buy one.
 * 
 * Example 1:
 * 
 * 
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit
 * = 6-1 = 5.
 * Not 7-1 = 6, as selling price needs to be larger than buying price.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * 
 * 
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// by  me
var maxProfit = function(prices) {
    if(prices.length ===0 || prices.length ===1){
        return 0;
    }
    let profits  =[];
    for (let i= 0;i<prices.length;i++){
        let ret=[];
        for( let j=i+1;j<prices.length;j++){
            let res = prices[j] -prices[i];
            ret.push(res);
        }
        profits.push(Math.max(...ret));
    }
    return Math.max(...profits)>0?Math.max(...profits):0;
};
// by net friend good solution
var maxProfit = function(prices) {
    let minPrice = prices[0]
    let maxProfit = 0
    
    for (let i = 1; i < prices.length; i++) {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice)
      minPrice = Math.min(minPrice, prices[i])
    }
    
    return maxProfit
  };
// console.log(maxProfit([7,6,4,3,1]))
