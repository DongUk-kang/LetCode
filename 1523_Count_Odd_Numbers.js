// Given two non-negative 
// integers low and high. 
// Return the count of odd numbers between low and high (inclusive).


// /**
//  * @param {number} low
//  * @param {number} high
//  * @return {number}
//  */




 var countOdds = function(low, high) {
    let count;
    if (low%2 !==0 || high%2 !== 0) {
        return Math.floor((high-low)/2) + 1
    }

    if (low%2 !== 0 && high%2 !== 0) return Math.floor((high-low)/2) +2
    else return Math.floor((high-low)/2);
};