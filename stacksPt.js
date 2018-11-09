
// class Stack {
//     constructor(){
//         this.item = [];
//     }
// }

// let stack = new Stack();
// stack.push(5);
// stack.push(10);

// // console.log(stack(100));

function List(){
    this.listSize = 0;
    this.pos=0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}
function append(){
    this.dataStore[this.listSize++] = element;
}

console.log(append());