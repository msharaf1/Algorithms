// Print 1-255

// function print255(){
//     for(let i=0; i<=255; i++){
//         console.log(i);
//     }
// }
// console.log(print255());

//Print Odd Numbers;

// function printOdd1000(){
//     for(let i=0; i<= 1000; i++){
//         if(i % 2 !==0){
//             console.log(i);
//         }
//     }
// }

// printOdd1000();


// function printOdd1000(){
//     let oddSum = 0;
//     for(let i=0; i<= 5000; i++){
//         if(i % 2 !==0){
//             oddSum += i;
//         }
//     }
//     console.log(oddSum);
// }

// printOdd1000();


//Iterating Through the Array

// let x = [1,3,5,7,9,13];
// function itArray(x){
//     for(let i =0; i < x.length; i++){
//         console.log(x[i]);
//     }
// }
// itArray(x);

//Find Max Number in an Array.

// let x = [1,3,5,7,9,13,800,-155];
// function findMax(x){
//     let max = 0;
//     for(let i=0; i<x.length; i++){
//         if(max < x[i]){
//             max = x[i];
//         }
//     }console.log(max);
// }
// findMax(x);

// let x = [1,3,5,7,9,13,800,-155];
// function findMin(x){
//     let min = 0;
//     for(let i=0; i<x.length; i++){
//         if(min > x[i]){
//             min = x[i];
//         }
//     }console.log(min);
// }

// findMin(x);

// let x = [1,3,5,7,9,13];
// function average(x){
//     let sum = 0;
//     let avg = 0;
//     for(let i =0; i<x.length; i++){
//         sum += x[i];
//         avg = sum/x.length;
//     }
//     console.log(avg);
// }

// average(x);

// Array With Odd Numbers

// x = [1,2,3,4,5,6,7,8,9,10,12,14,15,16,17,18,256];

// function ArrayWithOdds(x){
//     let y = [];
//     for(let i=0; i<x.length; i++){
//         if(x[i] % 2 !==0){
//             y.push(x[i]);
//         }
//     }
//     console.log(y);
// }
// ArrayWithOdds(x);

// x = 256;

// function ArrayWithOdds(x){
//     let y = "";
//     for(let i=0; i<x; i++){
//         if(i % 2 !==0){
//             y = y +", " +i;
//         }
//     }
//     console.log(y);
// }
// ArrayWithOdds(x);

// x = 256;

// function ArrayWithOdds(x){
//     let y = 0;
//     for(let i=1; i<x; i++){
//         if(i % 2 !==0){
//             y = y +", " +i;
//         }
//     }
//     console.log(y);
// }
// ArrayWithOdds(x);

// x = 256;

// function ArrayWithOdds(x){
//     let y = [];
//     for(let i=0; i<x; i++){
//         if(i % 2 !==0){
//             y.push(i);
//         }
//     }
//     console.log(y);
// }
// ArrayWithOdds(x);

// Greater than y;

let x = [1,2,3,4,5,6,7,8,9,10,12,14,15,16,17,18,256];
let y = 3;
function greaterThanY(x,y){
    let gY = [];
    for(let i =0; i < x.length; i++){
        if(y < x[i]){
            gY.push(x[i]);
        }
    } console.log(gY);
}
greaterThanY(x, y);