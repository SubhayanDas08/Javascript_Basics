/*
var h=1+1

{var hello="Chiku"}     //var is for defining global variable
console.log(hello);

let person={            //let and const are for defining local variable but const remains constant throughout whereas let can be changed
    name: 'Subhayan',
    age: 18,
    id: 120
};

console.log(person);

var arr=[[1,2,3],[1,2],[1]];    //Array representation

var myarr=arr[1];

console.log(myarr);

const square = function(x){     //Functions
    return x*x;
}

console.log(square(12));

const makeNoise = function(){       //void functions
    console.log("PLING!!!");
}

makeNoise();

const pow = function(base, exp){
    let res = 1;

    for (let i = 0; i < exp; i++) {         //For Loop
        res = res * base;    
    }

    return res
}

console.log(pow(2,10));

let x = 10;                         //Scope resolution Example

if (true) {                    //If Condition
    let y = 20;
    var z = 30;

    console.log(x + y + z);
}
//y is not visible as it is out of scope
console.log(x + z);

//DECLARATION NOTATION OF FUNCTIONS

function square_func(x){            //this is a function declaration
    return x*x;
}

console.log(square_func(10));
*/

//ARROW NOTATION OF FUNCTIONS

// const power = (base, exp) => {
//     let result = 1;

//     for (let i = 0; i < exp; i++) {
//         result *= base;
//     }

//     return result;
// }

// console.log("2 ^ 8 is : ", power(2, 8));

// const square1 = (x) => { return x * x };

// console.log("sqaure of 24 is : ", square1(24));

// const horn = () => { console.log("Horn ")};

// //CALL STACK

// function greet(who) {
//     console.log("Hello " + who);
// }

// greet("Harry!");
// console.log("Bye Bye!");

// function chicken() {
//     return egg();
// }

// function egg() {
//     return chicken();
// }
// console.log(chicken() + " came first.");

// function minus(a, b) {
//     if (b === undefined) return -a;
//     else return a - b;
// }
// console.log(minus(10));
// // → -10
// console.log(minus(10, 5));
// // → 5


// //CLOSURE FUNCTIONS:
// function multiplier(factor) {
//     return number => number * factor;
// }
// let twice = multiplier(2);
// console.log(twice(5));

// var add = (function() {
//     var counter = 0;
//     return function() { counter += 1; return counter }
// })();

// console.log(add());
// console.log(add());
// console.log(add());


// // RECURSION

// function power(base, exp) {
//     if (exp == 0) {
//         return 1;
//     } else {
//         return base * power(base, exp - 1);
//     }
// }

// console.log(power(3, 9));

// // GROWTH FUNCTIONS

// function zeroPad(number, width) {
//     let string = String(number);
//     while (string.length < width) {
//         string = "0" + string;
//     }
//     return string;
// }

// function printFarmInventory(cows, chickens, pigs) {
//     console.log(`${zeroPad(cows, 3)} Cows`);
//     console.log(`${zeroPad(chickens, 3)} Chickens`);
//     console.log(`${zeroPad(pigs, 3)} Pigs`);
// }

// printFarmInventory(7, 16, 301);

// //ARRAYS
// let list = [1, 2, 3, 4, 5, 6, 7];
// console.log(list[2]);
// console.log(list[0]);
// console.log(list[list[3]]);


// //PROPERTY METHODS
// let doh = "Doh";
// console.log(typeof doh.toUpperCase);
// // → function
// console.log(doh.toUpperCase());
// // → DOH

// let sequence = [1, 2, 3];
// console.log(sequence);

// sequence.push(4);
// sequence.push(5);

// console.log(sequence);

// console.log(sequence.pop());
// console.log(sequence);


// //OBJECTS with its PROPERTIES

// let day1 = {
//     squirrel: false, //squirrel & events are the properties of the object day1
//     events: ["work", "touched tree", "pizza", "running"]
// }

// console.log(day1.squirrel);

// console.log(day1.wolf);

// day1.wolf = true;

// console.log(day1.wolf);

// console.log(day1.events[1]);

// console.log(day1);

// //Delete Operator: TO delete a property of an object

// let anObject = {
//     left: 1,
//     right: 2
// }
// console.log(anObject.left);

// delete anObject.left;

// console.log(anObject.left);

// //in operator: tells whether the property exists in the object or not
// console.log("left" in anObject);

// console.log(anObject.right);

// //Object.keys : function to show all the properties of an object
// console.log(Object.keys(anObject));

// //Object.assign : function that copies all the properties of 1 object to another

// let obj1 = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(obj1);

// Object.assign(obj1, { c: 4, d: 5, e: 10 });

// console.log(obj1);

// //ARRAY OF OBJECTS

// let journal = [{
//         events: ["work", "touched tree", "pizza",
//             "running", "television"
//         ],
//         squirrel: false
//     },
//     {
//         events: ["work", "ice cream", "cauliflower",
//             "lasagna", "touched tree", "brushed teeth"
//         ],
//         squirrel: false
//     },
//     {
//         events: ["weekend", "cycling", "break", "peanuts",
//             "beer"
//         ],
//         squirrel: true
//     }
// ];

// console.log(journal[2].events[3]);

// // MUTABILITY

// let obj1 = { val: 10 };
// let obj2 = obj1;
// let obj3 = { val: 10 };

// console.log(obj1 == obj2);
// console.log(obj1 == obj3);

// obj1.val = 15;

// console.log(obj2.val);

// //const objects cant be changed but the properties can be modified individually
// const score = { visitors: 0, home: 0 };
// // This is okay
// score.visitors = 1;
// // This isn't allowed
// //score = { visitors: 1, home: 1 };

// console.log(score);