function sortStack(stack) {
    let sorted = [];
    while (stack.length) {
      tmp = stack.pop();  
      if (tmp >= sorted[sorted.length - 1]) {
        sorted.push(tmp);
      } else {
        while (tmp < sorted[sorted.length - 1]) {
          stack.push(sorted.pop());
        }
        sorted.push(tmp);
      }
    }
    return sorted;
  }

let s = [];
s.push(7);
s.push(2);
s.push(5);
s.push(1);
s.push(4);