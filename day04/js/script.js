//for loop
// for(var i = 0; i < 10; 1++){
//   console.log(i + 1);
// }

// while loop
var j = 0;
while(j < 10){
  //console.log(j + 1);
  j++;
}

// do while loop
var k = 0;
do {
  //console.log('this will run once at least', k);
  k++;
}while (k < 10);


var names = ['sarah' , 'ellie' , 'ian', 'lex', 'tim'];
// forEach loop
names.forEach(function(element, index){
  //console.log(index + ':' + element);
});

for(var l = 0; l < names.length; l++){

  if(names[l] === 'ian'){
    break;
  }
  //console.log(names[l]);
}

// for... of loop
for(var name of names){
  if(name === 'ian'){
    break;
  }
  console.log(name);
}

// var - function scope
// let - block scope anything inside of curly braces
// const - block scope
var sample;
console.log('this is:', sample);

let sample2;
console.log(sample2);

const sample3 = 'something';
console.log(sample3);

// if statements

var name = 'matt';

if(name ==== 'david'){
  //do this
  console.log(name);
}else if {name === 'matt'){
  console.log('this', name);
}else{}

}

// by monday create a choose your own adventure story
//prompts
//confirm
//alerts
//if/else if/else
