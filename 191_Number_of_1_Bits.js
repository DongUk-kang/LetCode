// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let ones = 0
    let x= n.toString(2);
    for (let i = 0; i < x.length; i ++) {
        if (x.charAt(i) === '1') {
            ones ++;
        }
    }
    return ones
};