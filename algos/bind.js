Function.prototype.mybind = function mybind(context) {
    var func = this;
    let args = Array.from(arguments.slice(1))
    return function () {
        func.apply(context, args);
    };
};

var boundFunc = func.bind(this);
var boundFunc = func.mybind(this);


Function.prototype.mybind = function(context) {
    let func = this;
    let args = Array.from(arguments).slice(1);
     return function() {
        return func.apply(context, args)
    }
}


Function.prototype.mycall = function(context, payload) {
    let func = this;
    let args = [...arguments, payload];
    return func.apply(context, args);
}

function showProfileMessage(message) {
 console.log(message, this.name);
}
const obj = {
 name: "Ankur Anand"
};

showProfileMessage.call(obj, "welcome")



