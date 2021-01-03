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

const power = (base, exp) => {
    let result = 1;

    for (let i = 0; i < exp; i++) {
        result *= base;
    }

    return result;
}

console.log("2 ^ 8 is : ", power(2, 8));

const square1 = (x) => { return x * x };

console.log("sqaure of 24 is : ", square1(24));