class Queue{
    constructor(){
        this.count=0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }
    
    isEmpty(){
        return this.items - this.lowestCount;
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    // isEmpty(){
        // return this.size() ===0;
    // }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    size(){
        return this.count - this.lowestCount;
    }

    clear(){
        this.items = {};
        this.count = 0;
        this.lowestCount =0;
    }

    toString(){
        if(this.isEmpty()){
            return "";
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount +1; i<this.count; i++){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

let myQ = new Queue();
myQ.enqueue("Hello World");
myQ.enqueue("Test B");
myQ.enqueue("Welcome to Coding Dojo")

// console.log(myQ.items);

// myQ.dequeue(); //removes hello world index[0]
// myQ.dequeue();
// myQ.dequeue();
// console.log("this is from queue", myQ.items);
// console.log(myQ.items);
// console.log(myQ.peek()); //shows the head/first index

// console.log(myQ.size());

// myQ.clear();
// console.log(myQ.items);
console.log(myQ.toString()); //convert to strings.
