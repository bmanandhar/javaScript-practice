var str = new String('String');
var num = new Number(100);

typeof str; // It will return 'object'
typeof num; // It will return 'object'

// But there is an exception in case of Function constructor of JavaScript

var func = new Function();

typeof func; // It will return 'function'
