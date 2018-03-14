Array.prototype.myMap = function (callback, thisArgs) {
    var arr = [];
    for (var i in this) {debugger
        if (this.hasOwnProperty(i)) {
            arr[i] = callback.call(thisArgs, this[i], i, this);
        }
    }
    return arr;
}

var arr = ["ravi", "2sahu", "3ohh"];
arr.myMap(function (a) {
    console.log(a);
});
