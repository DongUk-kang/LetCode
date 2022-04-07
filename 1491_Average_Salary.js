// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. 
// Answers within 10-5 of the actual answer will be accepted.

/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
     let maxWage = Math.max(...salary)
     let minWage = Math.min(...salary)
     let sum = salary.reduce((a,b) => a + b)

     sum -= maxWage
     sum -= minWage

     return sum / (salary.length - 2)
 };