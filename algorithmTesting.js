//Test these codes in the browser of your choice.
function testA(){

function sumInput(n){
    let sum = 0;
    for(let i=0; i <= n; i++){
        sum += i;
    }
    return sum;
}
let recordedTime = performance.now();
console.log(sumInput(658958855));
let recorded2ndTime = performance.now();//use it Chrome or Firefox browser.
//console.log("FirstRun", recordedTime);
//console.log("secondRun", recorded2ndTime);
console.log("Time in seconds", recorded2ndTime-recordedTime /1000);
};
testA();

function testB(){
function sumN(n){
    return n * (n +1)/2;
}
let firstRun = performance.now();
sumN(658958855);
let secondRun = performance.now();
console.log(`The Algorithm took ${secondRun-firstRun / 100} seconds to calculate the function`);
};
testB();

function testC(){
function printsMinEnterMax(n){
    for(let i=0; i<= Math.max(5, n); i++){
        console.log(i);
    }
}
printsMinEnterMax();
printsMinEnterMax(10);
};
testC();