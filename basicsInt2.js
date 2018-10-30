//predicting the output.
function a(){
 console.log('hello');
 }
 console.log('Dojo');
 //Code Sample 2 - function and return I
    
 function a(){
    console.log('hello');
    return 15;
    }
    x = a();
    console.log('x is', x);
//Code Sample 3 - function and return I
    
  function a(n){
    console.log('n is', n);
    return n+15;
    }
    x = a(3);
    console.log('x is', x);
//Code Sample 4 - function and return I
    
  function a(n){
    console.log('n is', n);
    y = n*2;
    return y;
    }
    x = a(3) + a(5);
    console.log('x is', x);
  
//    Code Sample 5 - order of operations I
    
function op(a,b){
   c = a+b;
    console.log('c is', c);
    return c;
    }
    x = op(2,3) + op(3,5);
    console.log('x is', x);
//Code Sample 6 - order of operations II
    
  function op(a,b){
    c = a+b;
    console.log('c is', c);
    return c;
    }
    x = op(2,3) + op(3,op(2,1)) + op(op(2,1),op(2,3));
    console.log('x is', x)
//Code Sample 7 - scoping
    
  let x = 15;
  function a(){
    let x = 10;
    }
    console.log(x);
    a();
    console.log(x);




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
let x = [1,2,3,4,5,10];
for(let i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
let x=15;
console.log(x);
function awesome(){
    let x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
for(let i=0; i<15; i+=2){
   console.log(i);
}
for(let i=0; i<3; i++){
   for(let j=0; j<2; j++){       
       console.log(i*j);
   }
}
function looping(x,y){
   for(let i=0; i<x; i++){
      for(let j=0; j<x; j++){         
          console.log(i*j);
      } 
   }
}
z = looping(3,3);
console.log(z);
function looping(x,y){
   for(let i=0; i<x; i++){
      for(let j=0; j<y; j++){         
         console.log(i*j);
      } 
   }
   return x*y;
}
z = looping(3,5);
console.log(z);

function printUpTo(x){
  // your code here
}
printUpTo(1000000); // should print all the integers from 1 to 1000000
y = printUpTo(-10); // should return false
console.log(y); // should print false
//PrintSum
//Please complete the code below to have the function print integers from 0 to 255 and with each integer print the sum so far.  Have the function return the final sum

function printSum(x){
  let sum = 0;
  //your code here
  return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640
PrintSumArray

///Please complete the code below to have the function return the sum of all the values in a given array

function printSumArray(x){
  let sum = 0;
  for(let i=0; i<x.length; i++) {
   //your code here
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6

