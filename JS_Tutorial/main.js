// Write and run in console of google

// firstContainer.innerHTML = "Hello Harry"
// firstContainer.innerHTML = "<b>Hello Harry</b>"
// document.getElementsByTagName('H1')
// document.getElementsByTagName('H1')[0]
// document.getElementsByTagName('H1')[0].style.fontSize="100px"
// document.getElementsByTagName('H1')[0].style.background="red"
// document.getElementsByTagName('H1')[0].style.visibility="hide"
// document.getElementsByTagName('H1')[0].style.visibility="hidden"
// document.getElementsByTagName('H1')[0].style.display="none"

//1> Ways to print in Javascript

// console.log("Hello World!");
// alert("me");
// document.write("this is document write");

//2> Javascript Console API

// console.log("Hello World", 230 + 123, "Another Log");
// console.warn("this is warning");
// console.error("this is an error");
// console.clear()
// console.assert(4 == (6 - 2))
// console.assert(4 == (6 - 10))

//3> Variables

var num1 = 33;
var num2 = 67;
// console.log(num1 + num2);

//4> Data Types
//Numbers
var num3 = 234;
var num4 = 123;

//String
var str1 = "Small string";
var str2 = "Big String";

//Objects
var marks = {
        ravi: 12,
        subh: 43,
        harry: 98
    }
    // console.log(marks);

//Booleans
var a = true;
var b = false;

//Undefined and NULL
var x = undefined;
var y = null;

//Arrays
var arr = [1, 2, 3, "subh", 5, 6, 7, true]
    // console.log(arr);


//5> Operators
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false); 
// console.log(!true);

//6> Functions

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = avg(5, 53);
c2 = avg(52, 14);

// console.log(c1, c2);

//7> Condionals

// var age = 41;
// // Single if statement
// if (age > 18) {
//     console.log('You can drink rasna water');
// }
// // if - else statement
// if (age > 18) {
//     console.log('You can drink rasna water');
// } else {
//     console.log('You cannot drink rasna water');
// }

// age = 25;
// // if-else Ladder
// if (age > 32) {
//     console.log("You are not a kid");
// } else if (age > 26) {
//     console.log("Bachhe nahi rahe");
// } else if (age > 22) {
//     console.log("Yes Bachhe nahi rahe");
// } else if (age > 18) {
//     console.log("18 Bachhe nahi rahe");
// } else {
//     console.log("Bachhe rahe");
// }
// console.log("End of ladder");


// 8> Loops

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(element) {
//     console.log(element);
// })

let j = 0;

// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);


// 9> BREAK AND CONTINUE

// for (let i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         // break;
//         continue;
//     }
//     console.log(arr[i]);

// }


// 10> ARRAY METHODS

let myArr = ["fan", "camera", 1, 2, 3, null, true];

// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);
// myArr.push("Subhayan");
// console.log(myArr);
// myArr.shift(); //removes the first one
// console.log(myArr);
// myArr.unshift("das"); //adds in front
// console.log(myArr);
// str = myArr.toString();
// console.log(str)
// arr = [9, 7, 5, 3, 7, 82, 1, 4, 1, 7, 0]
// arr.sort();
// console.log(arr);


//10> STRING METHODS

let str = "Subhayan is a coder";

// console.log(str.length);
// console.log(str.indexOf("coder"));
// console.log(str.slice(1, 5));
// str2 = str.replace("coder", "developer");
// console.log(str);
// console.log(str2);


// 11> DATES

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMonth());
// console.log(myDate.getMinutes());

// 12> DOM MANIPULATION