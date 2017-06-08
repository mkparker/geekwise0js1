// Hoisting variable names and function declarations
/*console.log(myname);
var myname = "mato";

firstname();
function firstname(){
  alert('my firstname');
}

console.log(lastname);
var lastname = function(){
  alert('my lastname');
};*/

//write a function that produces a random number from 0-10

//write a function that alerts random number
/*
function alertRand(){
    alert(getRandNum());
}

function getRandNum(){
  return Math.floor(Math.random() * 11);
}

// function asking user for a name
// properCap function
// function asking if there are more names? -if statement function
//after all names complete, alert full name
// at least 4 functions

/*function getName(){
  prompt('what is your name?');
}

function properCap(getName){
  getName = getName.charAt(0).toUpperCase() + getName.substr(1).toLowerCase();
}

function anyMore(){
  prompt('any more names?');
} */

/*var fullName = '';

function getName(){
  var user = prompt('Enter a name.');
  alertName(getMore(properCap(user)));
}
getName();

function properCap(str){
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

function getMore(str2){
  fullName += `${str2} `;
  // confirm('more names?') ? getName() : return fullName;
  if( confirm('more names?')){
    getName();
  }else{
      return fullName;
  }
}
function alertName(str3){
  if(str3 !== 'undefined'){
    alert(str3);
  }
}*/

// Targeting DOM elements
// getElementById()
var myH1 = document.getElementById('hdr1');
// getElementsByTagName()
var myP = document.getElementsByTagName('p')[0];
// getElementsByClassName()
var myAs = document.getElementsByClassName('a');
// querySelector()
var h1 = document.querySelector('#hdr1');

myH1.addEventListener('click', function(){
  // this.style.color = 'red';
  // this.style.paddingTop = '50px';
  // this.style.fontSize = '100px';
  //myP.style.color ='magenta';
  myP.classList.toggle('red');
});
