 function promiseAll(promises) {
     let results = [];
     return new Promise((resolve, reject) => {
            await promises.map(async (promise, index) => { 
                try {
                    let promiseRes = await promise;
                    results[index] = promiseRes;
                } catch(err) {
                    reject(err);
                }             
            });
            resolve(results);
         })
}

const data = await promiseAll([p1, p2, p3]);

