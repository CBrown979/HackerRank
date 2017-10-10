Objective 
Today, we're learning about the Array data structure. Check out the Tutorial tab for learning materials and an instructional video!

Task 
Given an array, , of  integers, print 's elements in reverse order as a single line of space-separated numbers.

Input Format

The first line contains an integer,  (the size of our array). 
The second line contains  space-separated integers describing array 's elements.

Constraints


, where Ai  is the ith integer in the array.
Output Format

Print the elements of array  in reverse order as a single line of space-separated numbers.

Sample Input

4
1 4 3 2
Sample Output

2 3 4 1

 
1
process.stdin.resume();
2
process.stdin.setEncoding('ascii');
3
​
4
var input_stdin = "";
5
var input_stdin_array = "";
6
var input_currentline = 0;
7
​
8
process.stdin.on('data', function (data) {
9
    input_stdin += data;
10
});
11
​
12
process.stdin.on('end', function () {
13
    input_stdin_array = input_stdin.split("\n");
14
    main();    
15
});
16
​
17
function readLine() {
18
    return input_stdin_array[input_currentline++];
19
}
20
​
21
/////////////// ignore above this line ////////////////////
22
​
23
function main() {
24
    var n = parseInt(readLine());
25
    arr = readLine().split(' ');
26
    arr = arr.map(Number);
27
    
28
    var finalArray = "";
29
  
30
    for (i = n -1 ; i >= 0; i--){
31
            finalArray += arr[i] + " ";
32
        }
33
    console.log(finalArray);
34
​
35
}
36
​
Line: 30 Col: 19

Testcase 0
Congratulations, you passed the sample test case.
Click the Submit Code button to run your code against all the test cases.

Input (stdin)
4
1 4 3 2
Your Output (stdout)
2 3 4 1 
Expected Output
2 3 4 1