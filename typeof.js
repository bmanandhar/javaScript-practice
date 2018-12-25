//Types of data in JavaScipt
//Boolean, Null, Undefined, Number, String, Symbol and Object

//Number:
console.log(

typeof 9 == 'number',
typeof(19) === 'number',
typeof Math.LN2 === 'number',
typeof Infinity === 'number',
typeof NaN === 'number', // Despite being not a number
typeof Number(1) === 'number', // but never uses this form!

//Strings
typeof '' === 'string',
typeof 'abc' === 'string',
typeof '1' === 'string', // note that a number within a string is still tpeof string
typeof (typeof 1) === 'string', // typeof always returns a string
typeof String('abc') === 'string', // but never uses this form

//Booleans
typeof true === 'boolean',
typeof false === 'boolean',
typeof Boolean(true) === 'boolean',

//Symbols
typeof Symbol() === 'symbol',
typeof Symbol('foo') === 'symbol',
typeof Symbol.iterator === 'symbol',

//Undefined
typeof undefined === 'undefined',
typeof declaredButUndefinedVariable === 'undefined',

//Objects
typeof {a: 1} === 'object',

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object',
typeof new Date() === 'object',

// The following is confusing. Don't use!
typeof new Boolean(true) === 'object',
typeof new Number(1) === 'object',
typeof new String('abc') === 'object',

//Functions
typeof function() {} === 'function',
typeof class C {} === 'function',
typeof Math.sin === 'function',

//null
// This stands since the begining of JavaScipt
typeof null === 'object'
)
