//Day 2 - Operators

'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[\n ]+'));
	main(+(_input[0]), +(_input[1]), +(_input[2]));    
});

function main(mealCost, tipPercent, taxPercent) {
     // Write your code here
    var tip; 
    var tax;
    tip = mealCost * tipPercent/100;
    tax = mealCost * taxPercent/100;
    
    var totalCost = mealCost + tip + tax;
    console.log("The total meal cost is " + Math.round(totalCost) + " dollars.");
    // Use console.log() to print to stdout
    

// Objective 
// In this challenge, you'll work with arithmetic operators. Check out the Tutorial tab for learning materials and an instructional video!

// Task 
// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.

// Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!

// Input Format

// There are  lines of numeric input: 
// The first line has a double,  (the cost of the meal before tax and tip). 
// The second line has an integer,  (the percentage of  being added as tip). 
// The third line has an integer,  (the percentage of  being added as tax).

// Output Format

// Print The total meal cost is totalCost dollars., where  is the rounded integer result of the entire bill ( with added tax and tip).

// Sample Input

// 12.00
// 20
// 8
// Sample Output

// The total meal cost is 15 dollars.
// Explanation

// Given: 
// , , 

// Calculations: 
// We round  to the nearest dollar (integer) and then print our result:
// The total meal cost is 15 dollars.