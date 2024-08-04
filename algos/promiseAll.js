function promiseAll(promises) {
    // iterate all Promises
    // once resolve, push to arr
    return new Promise((resolve, reject) => {
        let results = [];
        let unresolved = promises.length;
        if(unresolved === 0) {
            resolve(results);
            return;
        }
        promises.map(async (item, index) => {
            try {
                results[index] = await item;
                unresolved = unresolved - 1;
                if(unresolved === 0) {
                    return resolve(results);
                }
            } catch(error) {
                reject(error);
            }
        })
    });
}
