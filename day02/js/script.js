//alert("I hope you are having a nice day");

//confirm("Morpheus is only holding one pill and it's purple. Do you say OK and take it, or Cancel the offer and run away.");

//var purplePill = confirm("Morpheus is only holding one pill and it's purple. Do you say OK and take it, or Cancel the offer and run away.");

//console.log(purplePill);

// var prompt("Enter your name.");

//var userAge = parseInt( prompt("Please enter your age.") );

//console.log(userAge + 10);

//parseInt allows the age to be added.

//String Object

var myString = "this is a string";
var myStringObj = new String("this is a new string");

//Nunmber Object
var num = 7;
var numObj = new Number(7);
//console.log(num);
//console.log(numObj);


// typeof
// Float Object--decimal

var float = 5.435;
//console.log(float);

// Boolean Object
var bool = true;
//console.log(bool);

// Array Object
var arr = ['red', 'orange', 'green'];
var numArr = [0, 1, 2, 3];
console.log(arr[0] + arr[2]);
console.log(numArr[1] + numArr[2]); // add index 1 to index 2

// Object Object
var myCar = {
  make: "Subaru",
  model: "Outback",
  year: 2012
};
console.log(myCar);

console.log( myCar.model );
console.log( myCar.year);

// Math Object
// round to specific decimal
var num1 = 5.000000000009999;
// console.log( Math.round(num1)); // round by value
// console.log(Math.floor(num1)); // force round down
// console.log(Math.ceil(num1)); // force round up

var rand = Math.random();
rand = rand*10;
rand = Math.floor(rand);
//console.log(rand);

//console.log(Math.round((Math.random()*10)));

// Date Object
var theDate = new Date();
// console.log(theDate.getYear());
// getDate()===day of the month 0
// getDay()===day of the week
// getFullYear====year
// getMonth==== month 0 based

// if(theDate.getDay()=== 0){
//   console.log('sunday');
// }else if (theDate.getDay()=== 1){
//   console.log('monday');
// }else if (theDate.getDay()=== 2){
//   console.log('tuesday');
// }else if (theDate.getDay()=== 3){
//   console.log('wednesday');
// }

var myBday = new Date(1974, 11, 12);
var myDate = theDate.toLocaleString('en-us', {day: '2-digit'});
//console.log(myBday);

/* options:
weekday
year
month
day
hour
etc...

narrow, short, long, 2-digit
*/

var myBday = myBday.toLocaleString('en-us', {day: 'numeric'});
var myBmon = myBday.toLocaleString('en-us', {month: 'long'});
var myByear = myBday.toLocaleString('en-us', {year: 'numeric'});
console.log(myBmon + ' ' + myBday + ',' + myByear);

//prompt user for 3 individual items
//ask the user for thier number birth month
//ask the user for their number birth day
//ask the user for their full birth year
//save each response as a variable
//parse each response into a Number
//for 0 based items, subtract 1
//create a new date instance representing user's birthday
//var myBday = new(199, 9, 02);

//var someVariableName = new Date(var, var, var);

//take user's birthday object and parse to console in the folowing format:
//Oct 02, 99



// var userMon = parseInt(prompt('month')) - 1;
// var userDay = parseInt(prompt('day'));
// var userYear = parseInt(prompt('year'));
//
// var userBday = new Date(y, d, m);
//
// var m = userBday.toLocaleString('us-en' , {month: 'short'});
// var d = userBday.toLocaleString('us-en' , {day: '2-digit'});
// var y = userBday.toLocaleString('us-en', {year: '2-digit'});
//
// console.log( m + ' ' + d + ' , ' + y );

//MDN - Mozilla Develeoper Network
//W3schools
//Date Object, Math Object, Arrays, Strings, Numbers

var userMon = parseInt(prompt('month')) - 1;
var userDay = parseInt(prompt('day'));
var userYear = parseInt(prompt('year'));

var userBday = new Date(userYear, userMon, userDay);

var m = userBday.toLocaleString('us-en', {month: 'short'});
var d = userBday.toLocaleString('us-en', {day: '2-digit'});
var y = userBday.toLocaleString('us-en', {year: '2-digit'});

console.log( m + ' ' + d + ', ' + y );

// javascript1.matthewhigley.com
// MDN - Mozilla Developer Network
