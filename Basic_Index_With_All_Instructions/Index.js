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

// GROWTH FUNCTIONS

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 301);