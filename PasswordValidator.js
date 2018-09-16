function isPasswordValid(input){
  if (hasUpperCase(input) && hasLowerCase(input) && isLongEnough(input) && hasSpecialCharacter(input)){
    console.log('The password is valid.');
  }
  if (!hasUpperCase(input)){
    console.log('The password needs a capital letter!');
  }
  if (!hasLowerCase(input)){
    console.log('The password needs a lowercase letter!');
  }
  if (!isLongEnough(input)){
    console.log('The password needs to between 8 characters or longer!');
  }
  if (!hasSpecialCharacter(input)){
    console.log('The password needs special character!');
  }
}
function hasUpperCase(input){
  for (var i = 0; i < input.length; i++){
    if (input[i] === input[i].toUpperCase()){
      return true;
    }
  }
}
function hasLowerCase(input){
  for (var i = 0; i < input.length; i++){
    if (input[i] === input[i].toLowerCase()){
      return true;
    }
  }
}
function isLongEnough(input){
  if (input.length >= 8){
    return true;
  }
}
function hasSpecialCharacter(input){
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var i = 0; i < input.length; i++){
    for (var j = 0; j < specialCharacters.length; j++){
      if (input[i] === specialCharacters[j]){
        return true;
      }
    }
  }
}

isPasswordValid('Password');