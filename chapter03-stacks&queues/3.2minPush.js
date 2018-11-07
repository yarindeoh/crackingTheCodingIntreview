let minStack = [];

function pushMin(element) {
    if(!minStack.length) {
        minStack.push(element);
    } else {
        let currElem = minStack.pop();
        if(currElem < element) {
            minStack.push(element);
            minStack.push(currElem);
        } else {
            minStack.push(currElem);
            minStack.push(element);
        }
    }
}

function peekMin() {
    return minStack[minStack.length - 1];
}

function printStack() {
    for(let i = 0; i < minStack.length; i ++) {
        console.log(minStack[i]);
    }
}

pushMin(3);
pushMin(6);
pushMin(1);
pushMin(111);
pushMin(73);
pushMin(72);

console.log(peekMin());
