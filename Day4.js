//Day 4 - Class vs Instance
function Person(initialAge){
    var age;
    // Add some more code to run some checks on initialAge
    if (initialAge <= 0) {
        age = 0;
        console.log("Age is not valid, setting age to 0.");
    }else if (initialAge > 0) {
        age = initialAge;
    }
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    if (age < 13) {
        console.log("You are young.");
    }else if (age >= 13 && age < 18) {
        console.log("You are a teenager.");
    }else 
        {console.log("You are old.")};
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
       age++;
   };
}

//FULL Exercise
Objective 
In this challenge, we're going to learn about the difference between a class and an instance; because this is an Object Oriented concept, it's only enabled in certain languages. Check out the Tutorial tab for learning materials and an instructional video!

Task 
Write a Person class with an instance variable, , and a constructor that takes an integer, , as a parameter. The constructor must assign  to  after confirming the argument passed as  is not negative; if a negative argument is passed as , the constructor should set  to  and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:

yearPasses() should increase the  instance variable by .
amIOld() should perform the following conditional actions:
If , print You are young..
If  and , print You are a teenager..
Otherwise, print You are old..
To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet!

Note: Do not remove or alter the stub code in the editor.

Input Format

Input is handled for you by the stub code in the editor.

The first line contains an integer,  (the number of test cases), and the  subsequent lines each contain an integer denoting the  of a Person instance.

Constraints



Output Format

Complete the method definitions provided in the editor so they meet the specifications outlined above; the code to test your work is already in the editor. If your methods are implemented correctly, each test case will print  or lines (depending on whether or not a valid  was passed to the constructor).

Sample Input

4
-1
10
16
18
Sample Output

Age is not valid, setting age to 0.
You are young.
You are young.

You are young.
You are a teenager.

You are a teenager.
You are old.

You are old.
You are old.
Explanation

Test Case 0:  
Because , our code must set  to  and print the "Age is not valid..." message followed by the young message. Three years pass and , so we print the young message again.

Test Case 1:  
Because , our code should print that the person is young. Three years pass and , so we print that the person is now a teenager.

Test Case 2:  
Because , our code should print that the person is a teenager. Three years pass and , so we print that the person is old.

Test Case 3:  
Because , our code should print that the person is old. Three years pass and the person is still old at , so we print the old message again.

The extra line at the end of the output is supposed to be there and is trimmed before being compared against the test case's expected output. If you're failing this challenge, check your logic and review your print statements for spelling errors.


 
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
function Person(initialAge){
21
    var age;
22
    // Add some more code to run some checks on initialAge
23
    if (initialAge <= 0) {
24
        age = 0;
25
        console.log("Age is not valid, setting age to 0.");
26
    }else if (initialAge > 0) {
27
        age = initialAge;
28
    }
29
  this.amIOld=function(){
30
   // Do some computations in here and print out the correct statement to the console
31
    if (age < 13) {
32
        console.log("You are young.");
33
    }else if (age >= 13 && age < 18) {
34
        console.log("You are a teenager.");
35
    }else 
36
        {console.log("You are old.")};
37
  };
38
   this.yearPasses=function(){
39
          // Increment the age of the person in here
40
       age++;
41
   };
42
}
43
​

44
function main() {
45
​
46
var T=parseInt(readLine());
47
for(i=0;i<T;i++){
48
    var age=parseInt(readLine());
49
    var p=new Person(age);
50
    p.amIOld();
51
    for(j=0;j<3;j++){
52
        p.yearPasses();
53
        
54
    }
55
    p.amIOld();
56
    console.log("");   
57
    }
58
}
59
​
Line: 43 Col: 1
Run Code  Submit Code Upload Code as File 
Test against custom input
Testcase 0
Congratulations, you passed the sample test case.
Click the Submit Code button to run your code against all the test cases.

Input (stdin)
4
-1
10
16
18
Your Output (stdout)
Age is not valid, setting age to 0.
You are young.
You are young.

You are young.
You are a teenager.

You are a teenager.
You are old.

You are old.
You are old.

Expected Output
Age is not valid, setting age to 0.
You are young.
You are young.

You are young.
You are a teenager.

You are a teenager.
You are old.

You are old.
You are old.