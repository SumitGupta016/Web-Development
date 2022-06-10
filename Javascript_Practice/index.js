// 1.ways to print in javascript.
// console.log("Hello World!", 4+4, "Another log")
// alert("Don't Do That")
// document.write("This is document write")

// 2.javascript console API.
// console.warn("this is warning.")
// console.error("This is error")

//3. What is Variable? - A variable is a container that contains data values.
// var number1 = 25;
// var number2 = 75;

// console.log(number1 + number2);

// // 4. Datatypes in Javascript.
// var str1 = "This is a string";
// var str1 = "This is also a string";

// Object-

// var marks = {
//     shubham : 75,
//     rahul : 69,
//     tohid : 65,
//     Sumit : 59
// }
// console.log(marks);

// booleans- 
// var a = true;
// var b = false;

// console.log(a, b);

// var und;
// console.log(und);

// var n = null
// console.log(n);

// At a very high level , 
// there are two types of data types in Javascript

// 1.Primitive datatype : number, string, undefined, null, boolean, symbol
// 2.reference datatype : Arry, Objects


// var arr = [1,2,3,4,5];
// console.log(arr);


// Functions -
// function avg(a, b){
//     return (a + b)/2
// }
// c1 = avg(4, 6);
// c2 = avg(14, 16);

// console.log(c1)
// console.log(c2)


// loops
// var arr = [1,2,3,4,5,6,7];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })


// Array methods-

// let myArr = ["fan", "camera", 34, null, true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Harry");
// myArr.shift()
// const newlen = myArr.unshift("harry");
// console.log(newlen);
// console.log(myArr);
// console.log(myArr.sort())

// String methods in Javascript
// let mystring = "Sumit Is A Good Boy";
// console.log(mystring.length);
// console.log(mystring.indexOf("Good"));
// console.log(mystring.slice(0, 3));
// d = mystring.replace("Sumit", "Shubham")
// d = d.replace("Good", "Bad")
// console.log(d, mystring)

// let myDate = new Date();
// console.log(myDate);

// sel = document.querySelector(".container");
// console.log(sel);
// sel1 = document.querySelectorAll(".container");
// console.log(sel1);


// Javascript Events search kar kar ke padhne hai! mouse on clicked wagerah hai isme.

// Arrow Function

// function summ(a, b){
//     return a+b;
// }

// We can write this function in the form of this -->

// summ = (a, b)=>{
//     return a+b;
// }

// // SetTimeout and setinterval
// logKaro = ()=>{
//     console.log("I Am Your Log");
// }

/* we can use DOM manipulating things like queryselecter
in the function to do things in out document*/

// logKaro = ()=>{
//     document.querySelectorAll(".container")[1].innerHTML = "<b> Set interval fired</b>"
//     console.log("I am your log");
// }

// setTimeout(logKaro, 2000);

/* SetTimeout schedules the things or functions
after a perticular time.
it takes a function as itd first argument,
time in  miliseconds as its second argument.*/

/* if we want this process to run repeatedtly 
then we use setinterval*/

//clr =  setInterval(logKaro, 2000);

// clearInterval(clr), clearTimeout(clr) to cancel setInterval/setTimeout

// Javascript local storage -->

// localStorage.setItem("name", "sumit")
// localStorage
// localStorage.getItem("name")
// localStorage.removeItem("name")
// localStorage.clear

// JSON -->

// obj = {name : "Sumit", length : 1, a : {"this" : "that"}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse('{"name" : "Sumit", "length" : 1, "a" : {"this" : "that"}}')
// console.log(parsed)


/* JSON is an important topic to study about,
it helps to transport data 
and by knowing this we can do more with javascript.*/

// Template literals - Backtricks

a = 34;
console.log("This is my ${a}")