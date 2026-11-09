//examplee of let

let name = "Talha"; 
let address = "Karachi Pakistan";
let age = 20;
let percentage = 85.5;
let is_Student = true;
console.log(name + " " + address + " " + age + " " + percentage + " " + is_Student);

// info: Let is a block-scoped variable. It can be updated but not re-declared within the same scope. it can't be accessed outside of the block in which it is defined.


//example of var

var boss = "Tonic";
var company = "Tonic Company";
var salary = 50000;
var time = "9:00 AM to 5:00 PM";
var is_Employee = true;
console.log(boss + " " + company + " " + salary + " " + time + " " + is_Employee);

// info: Var is a function-scoped variable. It can be updated and re-declared within the same scope. It can be accessed outside of the block in which it is defined.




//example of const
const pi = 3.14;
const gravity = 9.8;
const inventer = "Thomas Edison";
const is_Alive = false;
const country = "america";
console.log(pi + " " + gravity + " " + inventer + " " + is_Alive + " " + country);

// info: Const is a block-scoped variable. It can't be updated or re-declared within the same scope. It can't be accessed outside of the block in which it is defined.





           //DAta types in javascript

//1. String
let firstName = "Talha";
let lastName = "Sajjad";
let fullName = firstName + " " + lastName;
console.log(firstName + " " + lastName + " " + fullName);


//2. Number
let age1 = 20;
let age2 = 30.67;
var age3 = 40;
console.log(age1 + " " + age2 + " " + age3);

//3. Boolean
let is_Student1 = true;
let is_Student2 = false;
let is_Student3 = true;
console.log(is_Student1 + " " + is_Student2 + " " + is_Student3);

//4. Undefined
let position;
let h = undefined;
let books;
console.log(position + " " + h + " " + books);

//5. Null
let x = null;
let y = null;
let z = null;
console.log(x + " " + y + " " + z);

//6. BigInt
let bigInt1 = 1234567890123456789012345678901234567890n;
let bigInt2 = BigInt ("1234567890123678901234567890");
let bigInt3 = 67890123456789012345678901234567890n;
console.log(bigInt1 + " " + bigInt2 + " " + bigInt3);

//7. Object
let Team1 = {
    Leader: "Talha",
    T_members: 5,
    Members: ["Talha", "Sajjad", "Ali", "Ahmed", "Usman"],
    budget: 100000,
    headquarters: "Bahawalpur",
}

let Team2 ={
    Leader: "Toni",
    T_members:5,
    Members: ["Toni", "bobby", "Ani", "Robert", "Peter"],
    budget: 120000,
    headquarters: "london",
}
console.log(Team1);
console.log(Team2);

//8. Symbol
let symbol1 = Symbol("rose");
let symbol2 = Symbol("black");
let symbol3 = Symbol("car");
console.log(symbol1);
console.log(symbol2);
console.log(symbol3);