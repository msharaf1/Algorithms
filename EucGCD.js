function findGTD(a, b){
  while(b!=0){
   t = a;
   a = b;
   b = t%b;

   }return a;

}

console.log(findGTD(20,8));
console.log(findGTD(60,96));
