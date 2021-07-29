//declare a class called Monster in an object data type with 6 key/value pairs
class Monster {
  constructor(name, nickname, teeth, demeanor, location) {
    this.name = name;
    this.nickname = nickname;
    this.teeth = teeth;
    this.demeanor = demeanor;
    this.location = location;
    this.isScary = true;
  }
//print the elements from the object to the console
  roar() {
    console.log('RARRRR')
  }
//changeName to have console respond back with the new name
  changeName(newName) {
    this.name = newName
    return `I go by ${this.name} now!`
  }
//visitDentist is input and converted from teeth to newTeeth
  visitDentist(newTeeth) {
    this.teeth = newTeeth
  }
//changeMood to create a newMood and replace this.demenor
  changeMood(newMood) {
    this.demeanor = newMood
//print the elements from the object to replace the prior elements
    console.log("Now all of a sudden I feel very " + this.demeanor + "!")
  }
}
