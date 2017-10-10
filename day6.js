Objective 
Today we're expanding our knowledge of Strings and combining it with what we've already learned about loops. Check out the Tutorial tab for learning materials and an instructional video!

Task 
Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

Note:  is considered to be an even index.

Input Format

The first line contains an integer,  (the number of test cases). 
Each line  of the  subsequent lines contain a String, .

Constraints



Output Format

For each String  (where ), print 's even-indexed characters, followed by a space, followed by 's odd-indexed characters.

Sample Input

2
Hacker
Rank
Sample Output

Hce akr
Rn ak
Explanation

Test Case 0:  

The even indices are 0, 2, and 4, and the odd indices are 1, 3, and 5. We then print a single line of 2 space-separated strings; the first string contains the ordered characters from 's even indices (), and the second string contains the ordered characters from 's odd indices ().

Test Case 1:  
 
The even indices are  and , and the odd indices are  and . We then print a single line of  space-separated strings; the first string contains the ordered characters from 's even indices (), and the second string contains the ordered characters from 's odd indices ().

JavaScript (Node.js)

 
1
function processData(input) {
2
    //Enter your code here
3
​
4
    var strInput = input.split("\n")
5
    var even = ""
6
    var odd = "";
7
    for (i = 1; i < strInput.length; i++) {
8
        for (j = 0; j < strInput[i].length; j++){
9
            if (j % 2 == 0){
10
                even += strInput[i][j];
11
            }else if (j % 2 == 1) {
12
                odd += strInput[i][j];
13
            }
14
        }
15
        console.log(even + " " + odd);
16
     
17
    };
18
};

Current Output -- incorrect
Your code did not pass this test case.
Input (stdin)
2
Hacker
Rank

Your Output (stdout)
Hce akr
HceRn akrak

Expected Output
Hce akr
Rn ak

Compiler Message
Wrong Answer


​
20
process.stdin.resume();
21
process.stdin.setEncoding("ascii");
22
_input = "";
23
process.stdin.on("data", function (input) {
24
    _input += input;
25
});
26
​
27
process.stdin.on("end", function () {
28
   processData(_input);
29
});
30

