var usernameArray = []
var usernames = prompt('please enter a username');


function getUser(){
  usernames = prompt('please enter another username');
  usernameArray.push(usernames);
  console.log(usernameArray);
}

// add additional usernames to teh beginning

function removeUser(){
  usernameArray.shift();
  console.log(usernameArray);
}
