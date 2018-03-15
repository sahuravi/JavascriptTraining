function isObject(val) {
	return Object.prototype.toString.call(val) === "[object Object]";
}

isObject(2);            // false
isObject(true);         // false
isObject({});           // true
isObject([]);           // false
isObject(function(){}); // false
isObject("ravi");       // false
