/*
Write a function called "repeatString".

Given a string and a number, "repeatString" returns the given string repeated the given number of times.

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
*/

function repeatString(string, num) {
  var newStr = "";
  for(var i = 0; i < num; i++){
    newStr += string 
  }
  return newStr
}
