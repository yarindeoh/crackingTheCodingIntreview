class LRU { // least recently used
    constructor(max = 10) {
        this.max = max;
        this.items = new Map();
        this.countCacheAccess = new Map();
    }

    get(key) {
        let item = this.items.get(key);
        // console.log(this.countCacheAccess.get(key), item, 'currentCount');
        if(item) {
            // check if there is a count with the key, and
            let currentCount = this.countCacheAccess.get(key) ?? 0;
            // console.log('currentCount', currentCount);
            this.countCacheAccess.set(key, currentCount + 1);
        }
        if (item && this.countCacheAccess.get(key) >= 6) {
            this.items.delete(key);
            this.countCacheAccess.delete(key);
        } else {
            // refresh key
            this.items.delete(key);
            this.items.set(key, item);
        }
        return item;
    }

    insert(key, val, ttl) {
        if(this.countCacheAccess.get(key)) {
            this.countCacheAccess.delete(key);
        }
        // refresh key
        if (this.items.has(key)) {
            this.items.delete(key);
        }
        // evict oldest
        else if (this.items.size == this.max) {
            this.items.delete(this.first());
        }
        this.items.set(key, val);
    }

    first() {
        return this.items.keys().next().value;
    }
}


// Util
const delay = async ms => new Promise(res => setTimeout(res, ms));

// 1-> one
// 1 -> one
// 1-> two
const run = async () => {
    const cache = new LRU(2);
    cache.insert(1, 'one');
    cache.insert(1, 'one');
    console.log('The value one should exist in the cache');
    console.log(cache.get(1));
    console.log('The value one should exist in the cache');
    console.log(cache.get(1));
    console.log('The value one should exist in the cache');
    console.log(cache.get(1));
    cache.insert(1, 'two');
    console.log('The value one should exist in the cache');
    console.log(cache.get(1));
    console.log('The value one should exist in the cache');
    console.log(cache.get(1));
    console.log('The value one should not exist in the cache');
    console.log(cache.get(1));
    console.log('The value one should not exist in the cache');
    console.log(cache.get(1));
    console.log('The value one should not exist in the cache');
    console.log(cache.get(1));






    // console.log('\n\n ** For TTL implementation: ** \n\n');

    // cache.insert(2, 'two', 10);
    // console.log('The value two should exist in the cache');
    // console.log(cache.get(2));
    // await delay(15)
    // console.log('The value two should not exist in the cache');
    // console.log(cache.get(2));

}

run()
