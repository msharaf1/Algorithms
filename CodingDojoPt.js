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

let x = [1,3,5,7,9,13];
function itArray(x){
    for(let i =0; i < x.length; i++){
        console.log(x[i]);
    }
}
itArray(x);
