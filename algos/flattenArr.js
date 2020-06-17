/**
 * Flatten array of arrays into one values array
 * [1, 2, [3, 4, [5, 6]]]
 * @param {Array} arr
 */
function getFlattenArrValues(arr) {
    let res = [];
    
    function getArrValues(item) {
        if (Array.isArray(item)) {
            for (let j = 0; j < item.length; j++) {
                getArrValues(item[j]);
            }
        } else {
            res.push(item);
        }
    }

    getArrValues(arr);
    return res;
}

function getFlattenArrValuesV2(arr) {
    return arr.reduce((acc, val) => {
        return acc.concat(
            Array.isArray(val) ? getFlattenArrValuesV2(val) : val
        );
    }, []);
}

// function flatten(arr) {
//   return arr.reduce((acc, elem) => {
//     if (Array.isArray(elem))
//       acc.push(...flatten(elem));
//     else
//       acc.push(elem);
    
//     return acc;
//   }, []);
// }

getFlattenArrValuesV2([1, 2, [3, 4, [5, 6]]]);
[1, 2, [3, 4, [5, 6]]].flat(Infinity);

function flatten(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        // pop value from stack
        const next = stack.pop();
        if (Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    // reverse to restore input order
    return res.reverse();
}
