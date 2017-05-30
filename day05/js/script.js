// if
// == equal to
// === strict equal t0
// < less than
// <= less than equal too
// > greater than
// >= greater than equal to
// ! not
// ! = not equal to
// !== not strict equal to
// && and
// || or
// var age = parseInt(prompt('what is your age?'));
// console.log(!!age);
// var gender = prompt(' are you a male or female?');
// //var age;
// if(age > 21 && gender == 'female') {
//   console.log('welcome');
// }else if(age < 21){
//   console.log('too young');
// }else{
//   //console.log('exactly');
// }
//
// if(!age){
//   console.log('enter your age');
// }

// switch statement

// ternary operator
/*
var age = prompt('what is your age?');

age >= 21 ? console.log('welcome') : console.log('nope');
*/

//var nyname;

/*console.log(myname);

var myname = 'mato'; //function scope

console.log(myname);

let mymiddlename = 'none'; //block scope
console.log(mymiddlename);

const mylastname = 'parker'; //block scope
console.log(mylastname);

var dog = 2;
if(dog > 1){
  let dogyears = 7;
  console.log(dogyears * dog);
}*/

/*
// JavaScript Functions

// Function Declaration

function myName(name, age){ // <-- parameters go here
  //alert(name + 'is' + age + 'years old');
  alert(`${name} is ${age} years old`) //template strings
} //interpolation `${}`
myName('chuck', 29); //<-- arguments go here

// Function Expression

var myCar = function(car){ // <-- parameters go hear
  alert(car);
}('honda'); //<-- arguments go here

function vehicleYear(year, model){
  alert(`${year}, ${model}`)
}
vehicleYear(2017, 'outback');

//myCar();

// strings with ''
// strings with ""
// backticks ``
*/

// with 2 prompts get the user's first name and last name
// write a function that alerts a message welcoming them

// function firstName(firstName){
//   //alert('What is your first name?')
// }
//
//
// var fname = (prompt('What is your first name?'));
// welcome(fname)
//
// var lname = (prompt('What is your last name?'));
// // console.log(firstName);
// //
// // lastName(prompt('What is your last name?'));
// // console.log(lastName);
//
// function welcome(fname, lname){
//   alert(`${fname}, ${lname}`)
// }

//var userFirst = prompt('what is your first name?');
//var userLast = prompt('what is your last name?');
// arguments object
// function welcome(){
//   var msg = 'Welcome';
//   for(var arg of arguments){
//       msg += ' ' + arg;
//   }
//   alert(msg);
// }
// welcome('Sarah', 'Mato', 'Madison', 'Dylan');

// function welcome(){
//   alert('Sarah!')
// }

var greet = function(name){
  alert(name);
};

//user clicks the button
//user is prompted to enter their first name
// save user's name and account for extra spaces
// ensure first character is capped
//reaminaing are drop capped
//pass into another function
//alert welcome message to user

//should be able to to this all in 2 functions minimum

//small pieces
//save the caps for last
