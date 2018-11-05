// let w = "racecar";

// function pl(w){

//     for(let i=0; i<w.length; i++){
//         console.log("this is I : ", i);
//         for(j = w.length -i; j >= i; i++){
//             console.log("This is J: ", j)
//     }
// }
// }
// pl(w);

let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];
// console.log(averageTemp);

let newAvg = [ "A",[ "Inner Array",72, 75, 79, 79, 81, 81 ], [ "B", 79, 75, 75, 73, 73 ] ];

let itArray = (newAvg) => {
    for(let i =0; i < newAvg.length; i++){
        // console.log(newAvg[i]);
        for(let j =0; j< newAvg[i].length; j++){
            console.log(newAvg[i][j]);
        }
    }
}
itArray(newAvg);


// function printMatrix(myMatrix) {
//     for (let i = 0; i < myMatrix.length; i++) {
//     for (let j = 0; j < myMatrix[i].length; j++) {
//     console.log(myMatrix[i][j]);
//     }
//     }
//     }




// let a = [10,20,30,4,5,["One","Two","Three", "Four"],4,56,3,30];

// function ptArrays(a){

//     for(let i=0; i <a.length; i++){
//         // console.log(a[i]);
//         for(let j= 0; j< a[i].length; j++){
//             console.log("this is I: ",a[i], "this is J: ", a[j]);
//         }

//     }
// }
// ptArrays(a);