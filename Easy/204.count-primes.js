/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n<=1) return 0
    let isPrimes = [];
     let count= 0;
     for(let i=2;i<n;i++){
        if(isPrimes[i] === undefined){
            isPrimes[i]=1;
            count++;
            let j =2;
            while(i*j < n){
                isPrimes[i*j] = 0;
                j++; 
            }
        }
     }
          return count;
    
};
countPrimes(10);
