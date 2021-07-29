//Declare a function named addNumbers without parameters
function addNumbers() {
  var firstNum = 9
  var secondNum = 14

  firstNum = 3
  secondNum = 4
//Give the name of nums to a variable
  var nums = [firstNum, secondNum]
//declare a variable named nums and assign it a value consisting of the two multiplied
  var product = firstNum * secondNum
  //declare a variable named sum and assign it a value consisting of the two added
  var sum = firstNum + secondNum
  //declare a variable named average and assign it a value of the variable sum divided by the length of the variable
  var average = sum / nums.length
  // print to console the value of the element in the first index of the nums array
  console.log(nums[0])
  //print to console the value of the element in the second index in the nums array
  console.log(nums[1])
 //print to console the value of the string with the values num1 and num2 interpolated
  console.log(`The first number is ${num1} and the second number is ${num2}!`)

  return sum
}
