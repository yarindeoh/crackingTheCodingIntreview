const add = () => {
    let memo = {};
    return (num) => {
        if(num in memo) {
            console.log('memo');
            return memo[num];
        } else {
            console.log('new');
            memo[num] = num * num;
            return memo[num];
        }
    };
};

const memo = add();
console.log(memo(5));
console.log(memo(5));

// const func = (num) => {
//     // console.log('function' + num);
//     return num;
// };

// const memoize = (fn) => {
//     let cache = {};
//     return (...args) => {
//         let n = args[0];  // just taking one argument here
//         if (n in cache) {
//             console.log('Fetching from cache');
//             return cache[n];
//         }
//         else {
//             console.log('Calculating result');
//             let result = fn(n);
//             cache[n] = result;
//             return result;
//         }
//     }
// };
// const memoizedAdd = memoize(func);
// console.log(memoizedAdd(3));  // calculated
// console.log(memoizedAdd(3));  // cached
// console.log(memoizedAdd(4));  // calculated
// console.log(memoizedAdd(4));  // cached