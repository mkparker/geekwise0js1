var btn = document.querySelector('button');
var nav = document.querySelector('ul');
// Click Event
//btn.addEventListener('click', function(evt){
//console.log(this);
//console.log(evt.target.innerText);
//});

// mouseenter
//btn.addEventListener('mouseenter', function(evt){
//  console.log(evt);
  //evt.target.style.color = 'red'; // <-- use dot notation to target the element itself and modify a style porperty.
//});

//mouseleave
//btn.addEventListener('mouseleave', function(evt){
//console.log(evt);
//evt.target.style.color = 'black';
//});

// scroll

window.addEventListener('scroll', function(evt){
  //console.clear();
  co//nsole.log(evt.pageY);
  if(evt.pageY > 57){
      nav.classList.add('vis');
  }else{
      nav.classList.remove('vis');
  }
});

// keydown, keyup, keypress

// text content innerHTMl
// var setDiv = document.querySelector("div#set");
// setDiv.innerHTML = '<p>Here is a line</p>.';
//
// var getDiv = document.querySelector("div#get");
// console.log(getDiv.innerHTML);

var submitBtn = document.querySelector('input[type = submit]');

var form = document.querySelector('form');
//var inputText = document.querySelector('input[type="text"]')
submitBtn.addEventListener('click', function(evt){
evt.preventDefault();
console.log(form);
var formVals =[];

for(var i = 0; i < form.length - 1; i++){
  //console.log(form[i].value);
  formVals.push(form[i].value);
}
// var text = inputText.value;
// var pass = inputPass.value;
// alert(text + ' ' + pass);
});

// "listen" for keypresses
// grab the keycode
//textContent or innerHTML to "set" the code to the window
// create a <div> to push the code into
// http://keycode.info
