function Queue() {
    this.stack1 = [];
    this.stack2= [];
}

function insertQueue(q, element) {
    q.stack1.push(element);
}

function moveToStack1(q) {
    while(q.stack2.length > 0) {
        q.stack1.push(q.stack2.pop());
    }
}

function popQueue(q) {
    while(q.stack1.length > 0) {
        q.stack2.push(q.stack1.pop());
    }
    console.log(q.stack2.pop());
    moveToStack1(q);
}

function shift(q) {
    while(q.stack1.length > 0) {
        q.stack2.push(q.stack1.pop());
    }
    let last = q.stack2.shift();
    moveToStack1(q);
    return last;
}

function printQueue(q) {
    console.log('front');
    for( let i = 0; i < q.stack1.length; i ++) {
        console.log(q.stack1[i]);
    }
    console.log('back');
}


let c = new Queue();
insertQueue(c, 5);
insertQueue(c, 8);
insertQueue(c, 3);
insertQueue(c, 1);
printQueue(c);
popQueue(c);
printQueue(c);