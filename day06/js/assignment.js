var firstBtn = document.getElementById('firstBtn');

var secondBtn = document.getElementsByTagName('button')[1];

var thirdBtn = document.querySelector('li:last-child');

function properCap(str){
  return str.charAt(0).toUpperCase()+ str.substr(1).toLowerCase();
}

var fullName ='';

firstBtn.addEventListener('click', function (){
  fullName += properCap(prompt('get first name')) + ' ';
});

secondBtn.addEventListener('click', function (){
  fullName += properCap(prompt('get middle name')) + ' ';
});

thirdBtn.addEventListener('click', function (e){
  fullName += properCap(prompt('get last name'));
  //var that = this;
  //getName(that);
  console.log(e);
  alert(fullName);
});

function getName(theOther){
  //console.log(theOther);
  fullName += properCap(prompt('get ' + theother.originalTarget.innerText)) + ' ';
}


//var lastName = document.querySelector("")

//function(firstName){
  //prompt('What is your first name?');
  //var firstName = document.getElementById('first');

//}

//function (middleName){
  //prompt('What is your middle name?');
  //var middleName = document.getElementsByTagName('button')[0];
//}

//function (lastName){
  //Prompt('What is your last name?');
  //var lastName = document.querySelector("")
//}
