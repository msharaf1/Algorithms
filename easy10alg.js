function factorialize(num){
    let fact = 1;
    for(let i =1; i <= num; i++){
        // console.log(i);
        fact *= i;
        // console.log(fact);
    }
    return fact;
}
// console.log(factorialize(5),
// factorialize(10),
// factorialize(20),
// factorialize(1)
// );



