//declare a function for buildABear with 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
  //declare a variable of greeting, value is a string with name parameter
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
  //declare a variable of demographics, value is an array with two parameters
  var demographics = [name, age]
  //declare a variable of powerSaying, value is a string with specialPower parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?"
  //declare a variable of builtBear, value is an object builtBear with 5 Key/value pairs
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  }
//when function is called, it will return the object builtBear with 5 key/value pairs
  return builtBear
}
//invoke the buildABear function will return 5 parameters
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
//invoke the buildABear function will return 5 parameters
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')
