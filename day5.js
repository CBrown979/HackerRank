//Day 5: Loops

//starting line 28 is my 2nd attempt - that worked, now in correct n x i = n*i  format -- YIPPEE!!!
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    for (i = 1; i <= 10; i++) {
      console.log(""+n+" x "+i+" = "+(n*i)+"");
        
   };
};

Congratulations, you passed the sample test case.
Click the Submit Code button to run your code against all the test cases.

Input (stdin)
2
Your Output (stdout)
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
Expected Output
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20



Day 5: Loops // first attempt below

Objective 
In this challenge, we're going to use loops to help us do some simple math. Check out the Tutorial tab to learn more.

Task 
Given an integer, , print its first  multiples. Each multiple  (where ) should be printed on a new line in the form: n x i = result.

Input Format

A single integer, .

Constraints


Output Format

Print  lines of output; each line  (where ) contains the  of  in the form: 
n x i = result.

Sample Input

2
Sample Output

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
Submissions: 139498
Max Score: 30
Difficulty: Easy
Rate This Challenge:
    
More
Current Buffer (saved locally, editable)     
 
JavaScript (Node.js)

 
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
   for (i = 1; i <= 10; i++) {
26
      console.log(n*i);
27
   };
28
};
29
​
Line: 26 Col: 19
Run Code  Submit Code Upload Code as File 
Test against custom input
Testcase 0
Your code did not pass this test case.
Input (stdin)
2
Your Output (stdout)
2
4
6
8
10
12
14
16
18
20
Expected Output
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
Compiler Message
Wrong Answer

