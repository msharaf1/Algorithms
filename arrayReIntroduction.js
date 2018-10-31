
// Given an array and a value Y, count and print the number of array values greater than Y.

// let x = [2,-11,10,5,6];
// let y = 5;

// function compareXY(x,y){
//     gtY = [];
//     for(let i=0; i< x.length; i++){
//         if(x[i] > y){
//             gtY.push(x[i]);
//         }
//     }return gtY;
// }
// console.log(compareXY(x,y));

// Given an array, print the max, min and average values for that array.

// x = [1,2,-4,4,5,67,8,500,-100, 44,55];
// function maxMinAg(x){
//     let min = x[0];
//     let max = x[0];
//     let sum = 0;
//     let avg = 0;
//     for(let i=1; i<x.length; i++){
//         if(min > x[i]){
//             min = x[i];
//         }else if(max < x[i]){
//             max = x[i];
//         }
//         sum += x[i];
//         avg = sum/x.length;
//     } console.log(min); console.log(max); console.log(sum); console.log(avg);
// }
// maxMinAg(x);


// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

// let x = [1,2,-3,-5,5];
// function replaceNegatives(x){
//     repalcedNegs = [];
//     for(let i=0; i < x.length; i++){
//         if(x[i] < 0){
//             repalcedNegs.push("Dojo");
//         } else {
//             repalcedNegs.push(x[i]);
//         }
//     }console.log (repalcedNegs);
// }
// replaceNegatives(x);


// let x = [1,2,-3,-5,5];
// function replaceNegatives(x){
//     repalcedNegs = [];
//     for(let i=0; i < x.length; i++){
//         if(x[i] < 0){
//             repalcedNegs.push("Dojo");
//         } else if(x[i]>0){
//             repalcedNegs.push(x[i]);
//         }
//     }console.log (repalcedNegs);
// }
// replaceNegatives(x);


// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].