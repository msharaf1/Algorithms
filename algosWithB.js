//Basic Stack in boject-Array.

// const letters = []; //stack
// const word = "racecar"; //palindorum


// for(let i =0; i<word.length; i++){
//     letters.push(word[i]);
// }
// console.log("stack's first iteration", letters);

// //pop off
// let revWord="";
// for(let i=0; i<word.length; i++){
//     revWord += letters.pop();
// }
// console.log(revWord);

// if(revWord === word){
//     console.log(word, "is a palindrome.");
// }else{
//     console.log(word, "is not a palindrom.");
// }


//Stack in JS


// const Stack = function(){
//     this.count = 0;
//     this.storage = {};

//     // Adds a value
//     this.push = function(value){
//         this.storage[this.count] = value;
//         this.count++;
//     };

//     //Remove a alue
//     this.pop = function(){
//         if(this.count === 0){
//             return undefined;
//         }
//         this.count--;
//         let result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//     };
    
//     this.size = function(){
//         return this.count;
//     };

//     //Return the value from top

//     this.peek = function(){
//         return this.storage[this.count-1];
//     };

// };

// const myStack = new Stack();

// myStack.push(10);
// myStack.push(20);
// myStack.push(30);
// myStack.push(40);
// myStack.push("HelloWorld");

// // console.log(myStack.size());
// // console.log(myStack.peek());
// // console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());


//Queues in JS.

// function Queue(){
//     let collection = [];
//     this.print = function(){
//         console.log(collection);
//     };
//     this.enqueue = function(element){
//         collection.push(element);
//     };
//     this.dequeue = function(){
//         return collection.shift();
//     };
//     this.front = function(){
//         return collection[0];
//     };
//     this.size = function(){
//         return collection.length;
//     };
//     this.isEmpty = function(){
//         return (collection.length ===0);
//     };
// }

// let q = new Queue();
// q.enqueue("A1");
// q.enqueue("B1");
// q.enqueue("C1");
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print();


// Priority Queue
function PriorityQueue(){
    const collection = [];
    this.printCollection=function(){
        console.log(collection);
    };
    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element);
        }else{
            let added = false;
            for(let i =0; i < collection.length; i++){ // priority check
                if(element[1] < collection[i][1]){
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            } if(!added){
                collection.push(element);
            }
        }
    };
    this.dequeue = function(){
        let value = collection.shift();
        return value[0];
    };
    this.front = function(){
        return collection[0];
    };
    this.isEmpty = function(){
        return (collection.length ===0);
    };
}

const pq = new PriorityQueue();
pq.enqueue(["James Boned", 2]);
pq.enqueue(["Jacki Chan", 3]);
pq.enqueue(["Ricky Mars",1]);
pq.enqueue(["Menhaj Sharaf", 5]);
// pq.printCollection();
// pq.front();
pq.printCollection();