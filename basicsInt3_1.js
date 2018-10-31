// function a(x,y){
//     return 5;
// }
// console.log(a(5,5)) //these values are irrelevent to the returning value
// console.log(a())//the function is returning the internal 5.


// function a(x,y){
//     z =[];
//     z.push(x);
//     z.push(y);
//     z.push(5);
//     console.log(z) //only prints the array
//     return z; //return array and exit function
// }

// b = a(2,2);
// console.log(b); //z = [2,2,5]
// console.log(a(6,8)) //z = [6,8,5]

// function a(x){
//     z = [];
//     z.push(x);//it adds
//     z.pop();
//     z.push(x);
//     z.push(x);
//     return z;
//  }
//  y = a(2);
//  console.log(y);
//  y.push(5);
//  console.log(y);

//Print True or False

// function a(x){
//     if(x[0] < x[1]){
//         return true;
//     }else{
//         return false;
//     }
// }
// b = a([2,3,4,5]);
// console.log(b);

// function a(x){
//     for(let i=0; i<x.length; i++){
//         if(x[i] > 0){
//             x[i] = "Coding";
//         }
//     }
//     console.log(x);
// }
// console.log(a([1,3,4,-8,-3]));

// function a(x){
//     for(let i=0; i < x.length; i++){
//         if(x[i] > 5){ x[i] = "Coding"; }
//         else if(x[i] < 0){x[i] ="Dojo";}
//         // console.log(x[i]);
//     } console.log(x);
// }
// console.log(a([5,7,-1,4]));

// function a(x){
//     if(x[0] > x[1]){
//         return x[1];
//     }
//     return 10;
// }
// b = a([5,10]);
// console.log(b);

//return 10.

// function sum(x){
//     sum = 0;
//     for(let i=0; i<x.length; i++){
//         // sum = sum +x[i];
//         sum+= x[i];
//         console.log(sum);
//     }
//     return sum;
// }

// console.log(sum([1,4,6,1,6]));

// function printAverage(x){
//     sum =0;
//     let average = 0;
//     for(let i=0; i<x.length; i++){
//         sum += x[i];
//         average = sum /x.length;
//     }return average;
    
// }
// y = printAverage([1,2,3]);
// console.log(y);

// y = printAverage([2,5,8]);
// console.log(y);

// function returnOddNumbers(x){
//     let oddNumbers = [];
//     for(let i=0; i <x.length; i++){
//         if(x[i] % 2 !==0){
//             oddNumbers.push(x[i]);
//         }
//     }return oddNumbers;
// }
// y = returnOddNumbers([3,5,7,4,8,9]);
// console.log(y);


function squareValue(x){
    let squareVal = [];
    for(let i=0; i<x.length; i++){
        squareVal.push(x[i] * x[i]);
    }
    console.log("this is log", squareVal);
    return x;
}
y = squareValue([1,2,3]);
console.log(y);
y = squareValue([2,5,8]);
console.log(y);