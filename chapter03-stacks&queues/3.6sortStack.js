const minStack = [];

function push(element) {
    let stackCount = minStack.length;
    let stackLength = minStack.length;
    if(stackLength) {
        minStack.push(element);
    } else {
        let latestElem = minStack[length - 1];
        if(latestElem > element || latestElem === element) {
            minStack.push(element);
        } else {
        }
    }
}

