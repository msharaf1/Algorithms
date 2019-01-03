let myArr = [2,3,4,5,6,7,10];
function mulSup(myArr){

  for(let i=0; i< myArr.length; i++){
    for(let j= i+1; j<myArr.length; j++){
      if(myArr[i] * myArr[j] ===20){
        console.log(myArr[i] , myArr[j], "matches")
    }

    }
  }
}

mulSup(myArr);
//Check if the multiplication of two walues equels to 20.
