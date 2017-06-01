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

// var fName = getFName, lName = getLName;
//
// function getFName (name) {
//   var = prompt('What is your '+ name +' name?');
//   name = name[0].toUpperCase() + name.substr(1).toLowerCase();
//   return name;
// }
//
// console.log(fName, lName);

/*function fNameLName() {
  var fName = prompt('What is your first name?');
  var lName = prompt('What is your last name?');
  //alert("Welcome" + " " + fName+ " " + lName);
    alert(`Welcome ${fName} ${lName}`);
}

function welcomeMessage(){
  alert(`Welcome ${fName} ${lName}`);
}*/

// higley
function getUsername(){
  var userFirst = prompt('Enter your first name.').trim();
  welcome(properCap(userFirst));
}

function properCap(uf){
  uf = uf.charAt(0).toUpperCase() + uf.substr(1).toLowerCase();
  //welcome(uf);
  return uf;
}
function welcome(uf){
  alert(`Welcome ${uf}.`);
}

console.log(properCap('Mhjckdkjhcds'));
