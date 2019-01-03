
// Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

function negToZero(nArray){

    for(let i=0; i < nArray.length; i++){
        if(nArray[i] < 0){
            nArray[i] = 0;
        }
    } console.log(nArray);
}
// negToZero([1,2,-1, -3]);



// Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].

//add a number to the beggning of the array.
// function addANum(x){
//     for(let i=x.length; i>0; i--){
//         x[i] = x[i-1];
//     }
//     x[0] = 200;
//     return x;
// }
// console.log(addANum([1,3,4,5,6]));

// function moveForward(xArray){
//     for(let i = 0; i < xArray.length; i++){
//         xArray[i] = xArray[i+1];
//         if(xArray[i] == undefined){
//             xArray[i] = 0;
//         }
//     }
//     console.log(xArray);
// }
// moveForward([1,2,3]);

// Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].

// function returnedReversed(x){
//     let revArray =[];
//     for(let i= x.length-1; i >=0; i--){
//         revArray.push(x[i]);
//     }
//     console.log(revArray);
// }

// returnedReversed([1,2,3]);

// Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

// function repeatTwice(x){
//     let repArray = [];
//     for(let i=0; i < x.length; i++){
//         repArray.push(x[i], x[i]);
//     }
//     console.log(repArray);
// }
// repeatTwice([4,"Ulysses", 42, false]);

myArray = [1,2,3,4,5,6];

function revArray(arr){
  let temp =0;
  for(let i =0; i<arr.length/2; i++){
    temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
    // console.log(arr);
  }
  return arr;
}

console.log(revArray(myArray));
