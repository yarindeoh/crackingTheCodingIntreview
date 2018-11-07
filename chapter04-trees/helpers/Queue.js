let Queue = function() {
    this.items = [];

    this.enqueue = function(element) {
        this.items.push(element);
    };

    this.dequeue = function() {
        return this.items.shift();
    };

    this.front = function() {
        return this.items[0];
    };

    this.printQueue = function() {
        let str = "";
        for(let i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        return str;
    };

};

module.exports = Queue;

// let q = new Queue();
// q.enqueue(2);
// q.enqueue(1);
// q.enqueue(30);
// q.enqueue(6);
//
// q.enqueue(80);
// q.dequeue();
// console.log(q.items);