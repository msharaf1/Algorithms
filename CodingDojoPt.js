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

// let x = [1,2,3,4,5,6,7,8,9,10,12,14,15,16,17,18,256];
// let y = 3;
// function greaterThanY(x,y){
//     let gY = [];
//     for(let i =0; i < x.length; i++){
//         if(y < x[i]){
//             gY.push(x[i]);
//         }
//     } console.log(gY);
// }

// greaterThanY(x, y);
// let x = [1,5, 10, -2];
// function sqrValue(x){
//     let sqrVal = [];
//     for(let i=0; i<x.length; i++){
//         sqrVal.push(x[i] * x[i]);
//     }
//     console.log(sqrVal);
// };
// sqrValue(x);


// let x = [1,5, 10, -2];
// function sqrValue(x){
//     let sqrVal = [];
//     for(let i=0; i<x.length; i++){
//         if(sqrVal[0] ===null){
//             sqrVal[0] = x[i] * x[i];
//         }else if(sqrVal[0] !==null){
//             sqrVal[i] = x[i] * x[i];
//         }
//     }
//     console.log(sqrVal);
// };
// sqrValue(x);

// let x =  [1,5, 10, -2];
// function eliminateNeg(x){
//     for(let i =0; i< x.length; i++){
//         if(x[i] <0){
//             x[i] = 0;
//         }
//     }
//     console.log(x);
// }
// eliminateNeg(x);

// let x = [1,5,10,-2];
// function minMaxAvg(x){
//     let max = x[0];
//     let min = x[0];
//     let sum =0;
//     let avg = 0;
//     for(let i =0; i<x.length; i++){
//         if(max < x[i]){
//             max = x[i];
//         }else if(min > x[i]){
//             min = x[i];
//         }
//         sum += x[i];
//         avg = sum/x.length;
//     }
//     console.log("Maximum value is: ", max, "Minimum value is: ", min, "The average value is: ", avg);
// }
// minMaxAvg(x);

// let x = [1,5, 10, 7, -2];
// function shiftArray(x){

//     for(let i =0; i<x.length; i++){
//         x[i] = x[i+1];
//         if(x[i]===undefined){
//             x[i] =0;
//         }
//     }
//     console.log(x);
// }
// shiftArray(x);

//Replace Zero with String
// let x = [-1, -3, 2];
// function zeroToString(x){
//     for(let i=0; i<x.length; i++){
//         if(x[i] < 0){
//             x[i] = "Dojo";
//         }
//     }
//     console.log(x);
// }
// zeroToString(x);

//Random Array

// let num = 100;
// function randArray(min, max){
//     let randArr = [];
//     for(let i=0; i< max; i++){
//         let rand = Math.floor(Math.random() * (max-min) + min);
//         // console.log(rand);
//         randArr.push(rand);
//     }
//     return randArr;
    
// }

// console.log(randArray(-50,100));


// Swapping two values
// For example say x = [2, 3, 5, 7, 6]. By the end of the program x, should be [6, 3, 5, 7, 2]. Do this without creating an empty array.

// let x = [2, 3, 5, 7, 6];

// function swapValues(x){
//     for(let i=0; i < x.length; i++){
//         let temp = x[0];
//         x[0] = x[x.length-1];
//         x[x.length-1] = temp;
//     }
//     return x;
// }
// console.log(swapValues(x));


// Reversing
// Given an array X of multiple values (e.g. [-3,5,1,3,2,10]), write a program that reverses the values in the array.).


// let x = [-3,5,1,3,2,10];

// function reverArray(x){
//     for(let i =x.length-1; i>=0; i--){
//         // console.log(x[i]);
//         x[0] = x[i];
//         x[i] = x[j];
    
//     }
//     console.log(x);
// }
// reverArray(x);

// function reverArray(x){
//     for(let i =0; i < x.length; i++){
//         // console.log(x[i]);
//         x[i] = x[x.length-1];
//     }
//     console.log(x);
// }
// reverArray(x);

// let x = [-3,5,1,3,2,10];
// function revArray(array){
//     let i =0;
//     n = array.length;
//     middle = Math.floor( n/2);
//     temp = null;

//     for(; i < middle; i++){
//         temp = array[i];
//         array[i] = array[n -1 -i];
//         array[n-1-i] = temp;
//     }
//     return x;
// }
// console.log(revArray(x));

// let x = [-3,5,1,3,2,10];
// function reverseArray(x){
//     for(let i =0; i < (x.length/2) -1 -i; i++){
        
//         let temp = x[i];
//         x[i] = x[x.length -1 -i]; 
//         x[x.length -1 -i] = temp;
//     }
//     // console.log(x);
//      return x;
// }
// reverseArray(x);

// Insert X in Y
// Write a program that inserts a new number X at an index Y. For example if array = [1, 3, 5, 7] and X = 10, and Y = 2, by the end of your program array should be [1, 3, 10, 5, 7] (in other words we added '10' on index 2). Check the output of your array once your program is completed to make sure it's working correctly.

// function insertX(x,y){
//     let array = [1, 3, 5, 7];
//     let newArray = [];
//     for(let i=0; i < array.length; i++){
//         if(i ===y){
//             newArray.push(x);
//         }
//         newArray.push(array[i]);
//     }
//     console.log(array);
//     return newArray;
// }
// console.log(insertX(10,2));

// let arr = [1,3,5,7];
// let x = 10;
// let y = 2;
// arr.push(0);

// for(let i= arr.length -1; i>y; i--){
//     arr[i] = arr[i-1];
// }
// arr[y] = x;
// console.log(arr);


// Removing Negatives
// Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6])

//Under PT...
// let arr = [0, -1, 2, -3, 4, -5, 6];
// function removeNegatives(arr){
//     for(let i=0; i < arr.length; i++){
//         if(arr[i] < 0){
//             arr[i]=arr[i+1];
//             // console.log(arr);
//             // arr.pop(arr[i]);
//         }
//         if(arr[i] === arr[i+1]){
//             arr.pop(arr[i]);
//         }
//     }
//     return arr;
// }
// console.log(removeNegatives(arr));

// let arr = [0, -1, 2, -3, 4, -5, 6];
// function removeNegatives(arr){
//     let numNegs = 0;
//     for(let i =0; i < arr.length; i++){
//         if(arr[i] < 0){
//             numNegs++;
//         } else{
//             arr[i - numNegs] = arr[i];
//         }
//     }
//     while (numNegs --){
//         arr.pop();
//     }
//     return arr;
// }
// console.log(removeNegatives(arr));


// let arr = [0, -1, 2, -3, 4, -5, 6];
// function removeNegatives(arr){
//     let newArr = [];
//     for(let i=0; i < arr.length; i++){
//         if(arr[i] >= 0){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(removeNegatives(arr));