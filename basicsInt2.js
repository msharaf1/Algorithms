// //predicting the output.
// 1) function a(){
//     2)    console.log('hello');
//     3) }
//     4) console.log('Dojo');
//     Code Sample 2 - function and return I
    
//     1) function a(){
//     2)   console.log('hello');
//     3)   return 15;
//     4) }
//     5) x = a();
//     6) console.log('x is', x);
//     Code Sample 3 - function and return I
    
//     1) function a(n){
//     2)   console.log('n is', n);
//     3)   return n+15;
//     4) }
//     5) x = a(3);
//     6) console.log('x is', x);
//     Code Sample 4 - function and return I
    
//     1) function a(n){
//     2)   console.log('n is', n);
//     3)   y = n*2;
//     3)   return y;
//     4) }
//     5) x = a(3) + a(5);
//     6) console.log('x is', x);
//     Order of Operations - please  read http://www.montereyinstitute.org/courses/DevelopmentalMath/COURSE_TEXT_RESOURCE/U01_L5_T2_text_final.html
    
//     Code Sample 5 - order of operations I
    
//     1) function op(a,b){
//     2)   c = a+b;
//     3)   console.log('c is', c);
//     4)   return c;
//     5) }
//     6) x = op(2,3) + op(3,5);
//     7) console.log('x is', x);
//     Code Sample 6 - order of operations II
    
//     1) function op(a,b){
//     2)   c = a+b;
//     3)   console.log('c is', c);
//     4)   return c;
//     5) }
//     6) x = op(2,3) + op(3,op(2,1)) + op(op(2,1),op(2,3));
//     7) console.log('x is', x)
//     Code Sample 7 - scoping
    
//     1) var x = 15;
//     2) function a(){
//     3)   var x = 10;
//     4) }
//     5) console.log(x);
//     6) a();
//     7) console.log(x);



Paper Algos I
We want you to get into the habit of using a T-diagram and doing this on paper.  This will not only help you during whiteboard exercises but will also make you a better troubleshooter and developer.  Do NOT skip this assignment please.

function multiply(x,y){
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);
function multiply(x,y){
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
for(var i=0; i<15; i+=2){
   console.log(i);
}
for(var i=0; i<3; i++){
   for(var j=0; j<2; j++){       
       console.log(i*j);
   }
}
function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<x; j++){         
          console.log(i*j);
      } 
   }
}
z = looping(3,3);
console.log(z);
function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<y; j++){         
         console.log(i*j);
      } 
   }
   return x*y;
}
z = looping(3,5);
console.log(z);
If you were not able to correctly predict the output of the codes above, you should re-do the algorithm app (please reset all the challenges) and spend up to 1 hour today.

Part 2
Print 1 to x
Please complete the codes below to have the function print all the integers from 1 to x.  If x is negative, have it print/log "negative number' and have the function return false.

function printUpTo(x){
  // your code here
}
printUpTo(1000000); // should print all the integers from 1 to 1000000
y = printUpTo(-10); // should return false
console.log(y); // should print false
PrintSum
Please complete the code below to have the function print integers from 0 to 255 and with each integer print the sum so far.  Have the function return the final sum

function printSum(x){
  var sum = 0;
  //your code here
  return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640
PrintSumArray
Please complete the code below to have the function return the sum of all the values in a given array

function printSumArray(x){
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    //your code here
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6
Create a function that returns the largest element in a given array.  For example largestElement( [1,30,5,7] ) should return 30.

Where to run/test these codes
You could either 1) go to jsbin.com to test these codes (turn on Javascript and Console; and turn everything else off), 2) right click on your google chrome browser, go to Inspect Element -> Console, and run your codes there or 3) run these codes inside <script> tags in your html.  Almost all developers will run their javascript codes either on sites like jsbin.com or on their browser console for algorithm exercises.

