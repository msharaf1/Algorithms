class Deque {
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    size(){
        return this.count - this.lowestCount;
    }
    isEmpty(){
        return this.size() ===0;
    }
    // addFront(element) {
    //     if(this)
    // }
}
