class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}//Node brackets

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(val){
        let newNode = new Node(val);
        if(this.head === null && this.tail ===null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }//add method

    remove(val){
        let runner = this.head;
        if(runner.val === val) this.head = runner.next;

        while(runner){
            if(!runner.next) break;
            if(runner.next.val ===val){
                if(!current.next.next){
                    this.tail = runner;
                    this.tail.next = null;
                }else{
                    runner.next === current.next.next;
                    return;
                }
            }
            runner = runner.next;
        }
    }

    
}//LinkedList bracket

