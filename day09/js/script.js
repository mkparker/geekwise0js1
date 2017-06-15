var myCar = {
  make: 'jeep',
  model: 'wrangler',
  year: 2014
};

var myOtherCar = {
  make: 'jeep',
  model: 'wrangler',
  year: 1997
};

function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}

var myJeep = new Car('jeep', 'wrangler', 2014, 'black');

var myOtherJeep = new Car('Jeep', 'Wrangler', 1997, 'red');

// console.log(myCar);
// console.log(myJeep);
// console.log(myOtherJeep);

//create a person object

var myPerson = {
  firstName: 'Mato',
  lastName: 'Parker',
  eyeColor: 'Blue',
  favSeason: 'Winter',
  favFood: 'Pizza'
};

var myOtherPerson = {
  firstName: 'Sarah',
  lastName: 'Parker',
  eyeColor: 'Brown',
  favSeason: 'Winter',
  favFood: 'Sushi'
};

function Person(firstName, lastName, eyeColor, favSeason, favFood){
  this.firstName = firstName;
  this.lastName = lastName;
  this.eyeColor = eyeColor;
  this.favSeason = favSeason;
  this.favFood = favFood;
}

var myPerson = new Person('Mato', 'Parker', 'Blue', 'Winter', 'Pizza');

var myOtherPerson = new Person('Sarah', 'Parker', 'Brown', 'Winter', 'Sushi');

/*console.log(myPerson);
console.log(myOtherPerson); */

//setTimeOut

function delay(){
  setTimeout(sayHello, 4000);
}
function sayHello(){
  alert("Hello");
}

//setInterval

//var greeting = setInterval(sayHi, 500);
//var greet = 0;

  //function sayHi(){
    //greet++;
    //console.log("Hi "+ greet);
//  }


var btns = document.querySelectorAll('button');
var timer;
for(let btn of btns){
  btn.addEventListener('mouseover', function(evt){
    //console.log(this);
    setTimeout(function(){
      getBtn(evt);
    }, 1000);
  });

  btn.addEventListener('mouseout', function(evt){
    clearTimeout(timer);
  });
}

function getBtn(evt){
  console.log(evt.target);
  evt.target.classList.add('megaBtn');
  evt.target.style.color = 'magenta';
  evt.target.style.fontSize = '200%';
}

//target the figure
//target the caption and display: none; by default
//on figure mouseenter, after 500ms figcaption display: block;
//visibility: hidden; & visibility: visible;
// opacity: 0; & apacity 1;
//if mouseleave before 500ms, clear the time out

var figure = document.querySelector('figure');

for(let figcaption){
  figcaption.addEventListener('mouseover', function(evt){
    setTimeout(function(){
      getfigcaption(evt);
    }, 500);
  })
}

    setTimeout(function(){
      getfigcaption(evt);
    }, 500);
  }
}
