// void set_timer(int ms, CB f)
// Example:

// -> t0: set2(700, B)
// -> t0+500ms: set2(300, A)
// …

requestsToProccess: []
function pushrequestsToProccess(cb) {
// insert to queue is sorted order by ms
}

  function cbStructure (ms, f){
    this.id = `${f.name}${ms}`, // String
    this.cb = f, // () => {}
    this.ms = ms, // Number
    this.timestamp = Date.now() // Number
    //constructor -> (ms, f) => new cbStructure
  }

function set2(ms, f){
  let newRequest = new cbStructure(f, ms);
  // push will insert to queue is sorted order
  cbQueue.push(newRequest);
   setCurrentTimer();
}

function setCurrentTimer() {
    let currentReq = requestsToProccess.pop();
  setTimer(currentReq.ms - (currentReq.timestamp).getSeconds(),    
        highOrderCb.bind(currentReq.cb));
}

 function highOrderCb(cb) {
      cb();
      setCurrentTimer();
    }



