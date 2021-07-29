//Declare a function getSandwichInfo
function getSandwichInfo() {
  //define a variable called sandwiches
  var sandwiches = ['Philly cheesesteak', 'Italian sub', 'Reuben', 'Bahn Mi', 'Nashville Hot Chicken', 'Caprese']
  //define a variable called whatIsShift
  var whatIsShift = sandwiches.shift()
  //define a variable called whatIsPop
  var whatIsPop = sandwiches.pop()
  //define a variable called whatIsLength
  var whatIsLength = sandwiches.length
  //define a variable called whatIsIndex
  var whatIsIndex = sandwiches[2]

//compare var i = sandwiches.length, if they have no sandwiches, return message
  for (var i = sandwiches.length - 1; i >= 0; i--) {
    console.log(`Hmmmm... Lemme get uh... Ummm... I'll take a ${sandwiches[i]} please. Thanks.`)
  }
//declare a variable for dinnerSpecial
  var dinnerSpecial = [sandwiches[1], sandwiches[sandwiches.length - 1], 'fries', 'two drinks']
//print to console dinnerSpecial[0]
  console.log(dinnerSpecial[0])
  dinnerSpecial[3] = 'a coupla Baja Blasts'
  //print to console dinnerSpecial[2]
  console.log(dinnerSpecial[2])
  dinnerSpecial[2] = 'onion rings'

//declare a variable for dailySpecial
  var dailySpecial = [sandwiches[0], 'chips', 'drink']
  //print to console dailySpecial[2]
  console.log(dailySpecial[2])
  dailySpecial[0] = 'Chesseburkle'
  //print to console dailySpecial
  console.log(dailySpecial)
  dailySpecial[1] = sandwiches[3]
}
