
//js is a dynamically typed language, so we can declare a variable without specifying the data type
//the data type of the variable will be determined at runtime based on the value assigned to it

//in js we can declare a variable using var, and reassign the value
var b=20;
var b=30;
console.log(b);
console.log(typeof b);

//by using let we can reassign but cannot redeclare the variable
let a=10;
//let a=20; //this will throw an error
console.log(a);

//const is used to declare a variable that cannot be reassigned or redeclared
const c=30;
//c=40; //this will throw an error
console.log(c);


//data types in js
//primitive data types: number, string, boolean, null, undefined, symbol
//non-primitive data types: object, array, function

//number
let num=10;
console.log(num);
console.log(typeof num);

//string
let str1="Hello";
let str2='World';
let str3=`Hello World`;
console.log(str1);
console.log(str2);
console.log(str3);

//boolean
let bool1=true;
let bool2=false;
console.log(bool1);
console.log(bool2);
console.log(typeof bool1);

//null
let n=null;
console.log(n);
console.log(typeof n);

//undefined
let u;
console.log(u);
console.log(typeof u);

//symbol
let sym=Symbol('sym');
console.log(sym);
console.log(typeof sym);
//symbols are unique and immutable data types that can be used as keys for object properties

//bigint
let bigInt=9007199254740991n;
console.log(bigInt);
console.log(typeof bigInt);

//object
let obj={
    name:"John",
    age:30
};
console.log(obj);
console.log(typeof obj);

//non-primitive data types: array
//1.push() - adds an element to the end of the array
let arr=[1,2,3];
arr.push(4);
console.log(arr);

//2.pop() - removes the last element from the array
arr.pop();
console.log(arr);

//3.shift() - removes the first element from the array
arr.shift();
console.log(arr);

//4.unshift() - adds an element to the beginning of the array
arr.unshift(0);
console.log(arr);