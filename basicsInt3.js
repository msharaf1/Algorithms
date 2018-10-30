// function multiply(x,y){
//     console.log(x);
//     console.log(y);
// }
// b = multiply(2,3);
// console.log(b);
// function multiply(x,y){
//     return x*y;
// }
// b = multiply(2,3);
// console.log(b);
// console.log(multiply(5,2));
// var x = [1,2,3,4,5,10];
// for(var i=0; i<5; i++)
// {
//    i = i + 3; 
//    console.log(i);
// }
// var x=15;
// console.log(x);
// function awesome(){
//     var x=10;
//     console.log(x);
// }
// console.log(x);
// awesome();
// console.log(x);


// for(let i =0; i<15; i+=2){
//     console.log(i);
// }

// for(let i=0; i<3; i++){
//     for(let j=0; j<2; j++){
//         console.log(i*j);
//     }
// }
//result: i = 0,1,2
//result: j = 0, 1
//log: 00|01|02

// function looping(x,y){
//     for(let i=0; i<x; i++){
//         for(let j=0; j<x; j++){
//             console.log(i*j);
//         }
//     }
// }
// z = looping(3,3);
// console.log(z);

//i: 0, 1,2
//j: 0,1,2,
//Log: 0,0,0| 0,1,2|0,2,4

// function looping(x,y){
//     for(let i=0; i<x; i++){
//         for(let j=0; j<y; j++){
//             console.log(i*j);
//         }
//     }
//     return x * y;
// }
// z = looping(3,5);
// console.log(z);

// i:0,1,
// j:0,1,2,3,4
// x: 3
// y:5
//  return: 3*5 = 15

//log: 0,0,0,0| 0,1,2,3,4|, 0,1,4,6,8


// function printUpTo(x){
//     //print all integers from 1 to x's value.
//     //return false for negatives

//     if(x < 0){
//         return false;
//     }
//     for(let i =0; i<x; i++){
//         console.log(i);
//     }

// };

// console.log(printUpTo(1000)); //print 1-1000
// y = printUpTo(-10);
// console.log(y);

// function printSum(x){
//     let sum = 0;
//     for(let i=0; i<x; i++){
//         sum += i;
//         // console.log(sum);
//     }
//     return sum;
//   }
//   y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
//   console.log(y) // should print 32640

function printSumArray(x){
    let sum=0;
    for(let i=0; i<x.length; i++){
        sum += x[i];
    }
    return sum;
}
console.log(printSumArray([1,2,3]));
//result: 6