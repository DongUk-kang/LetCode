/*
Given an integer number n, r
eturn the difference between the product of its digits and the sum of its digits.
*/

/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
     let addNum = 0
     let product = 1

     while ( n > 0) {
        product *= n % 10
        addNum += n % 10
        n = Math.floor(n / 10)
     }
     return product - addNum
    
};