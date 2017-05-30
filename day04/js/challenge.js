// gathere info from the user first name and last name for stylystic purposes you need the first letter of each to be caps

//1st week get user first name
//edgecase for extra spaces before and after...extra
//cap first letter
//lowercase remaining letters
//alert result

// prompt('Please enter your first name.');
// var firstName = prompt('Please enter first name.');
//
// prompt('Please enter your last name');
//
// console.log(firstName); WHISKEY TANGO FOXTROT

// var firstname = prompt('What is your first name?').trim();
// //console.log(firstname);
//
// var firstLetter = firstName.charAt(0);
// //console.log(firstLetter);
// var firstLetterCap = firstLetter.toUpperCase();
// //console.log(firstLetterCap);
// var remainingLetters = firstname.substr(1);
// //console.log(remainingLetters);
// var remainingLettersDrop = remainingLetters.toLowerCase();
// //console.log(remainigLettersDrop);
// alert(firstLetterCap+remainingLettersDrop);

var firstname = prompt('What is your first name?').trim();
var firstname = prompt('What is your last name?').trim();

alert(
  firstname.charAt(0).toUpperCase() + firstname.substr(1).toLowerCase(),

);
