/*
var myName ="Mato-Kuwapi Parker";

console.log(myName);

// atom materialui atom theme install THIS!

// .length
console.log(myName.length);

// .charAt()
console.log(myName.charAt(12));

// .indexOf()
console.log(myName.indexOf('w'));
console.log(myName.indexOf('P'));

// .lastIndexOf()
console.log(myName.lastIndexOf('a'));

// multiple instances

// .concat()
console.log(myName.concat(' peanuts')); //space so id doesn't tack on to the last letter.

// .substring() up to, but not including
console.log(myName.substring(0, 3));
console.log(myName.substring(7, 5));
console.log(myName.substring(8));

// .substr() total characters
console.log(myName.substr(0, 3));
console.log(myName.substr(5, 2));
console.log(myName.substr(2, 5));
console.log(myName.substr(8));

// .toUpperCase()
console.log(myName.toUpperCase());

// .toLowerCase()
console.log(myName.toLowerCase());

// used all the time for user validation--
// .trim()
// regular expressions -email validation
var newUser ='                        yoda      ';
console.log(newUser);
console.log(newUser.trim()); */

// Arrays identified by [] -zero-based
var sodas =['diet pepsi', 'mt. dew', 'coke'];
// console.log(sodas);
// console.log(sodas[0]);
// console.log(Array.isArray(sodas));

var colors =['red', 'orange', 'purple'];
var arrLength = colors.push('green'); //push adds to array
// console.log("the new array is", colors);
// console.log("the array length is", arrLength);

var arrLength = colors.unshift('pink');
// console.log("New array", colors);
// console.log("Array length is", arrLength);


var item = colors.pop();
// console.log("Item is", item);
//
// console.log("the new array", colors);
// console.log("the length of array", colors.length);

item = colors.shift();
// console.log("Item is ", item);
// console.log("New array is ", colors);
// console.log("array length is...", colors.length);


// .indexOf()
//console.log(colors.indexOf('red'));


// .lastIndxOf()
//console.log(colors.lastIndexOf('orange'));

// .splice() remove or add items
var removeItem = colors.splice(1, 2);
//console.log(colors);
//console.log(removeItem);

var addItems = colors.splice(1, 0, 'green', 'blue');
//console.log(colors);
//console.log(addItems);

var newColors = ['red', 'orange', 'yellow', 'blue', 'purple', 'green'];
// remove color green and add indigo in its place
// console.log(newColors.indexOf('green'));
// var removeItem = newColors.splice (2,1, 'indigo');
// console.log(newColors);

var remGreen = newColors.indexOf('green');
//console.log(remGreen);
newColors.splice(remGreen, 1, 'indigo');
//console.log(newColors);

// slice() - up to, but not including does not modify array
var moreColors = newColors.slice(0, 3);
//console.log(moreColors);

// .reverse()

var reverseColors = newColors.reverse();
//console.log(newColors);
//console.log(reverseColors);

newColors.sort();

var names = ['Matt', 'matt', 'david', 'higley', 'Higley', 'David']
names.sort();
console.log(names);


// bubble sort
var points = [4, 2, 5, 1, 3];
points.sort(function(a, b){
  return a - b;
});
console.log(points);

// for loop
// for(var i = 0; i < newColors.length; i++){
//     console.log('my fave color is', newColors[i]);
// }

var modColors = newColors.map(function(e, i){
  console.log(e);
  //console.log(i);
  console.log('my fave color', e);
});

var modPoints = points.map(function(e){
  return e * 2;

});

console.log(points);
console.log(modPoints);
