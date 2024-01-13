// Given array of names
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Function to determine greeting based on the starting letter
function greet(namesArray) {
  for (var i = 0; i < namesArray.length; i++) {
    var firstLetter = namesArray[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      console.log("Goodbye " + namesArray[i]);
    } else {
      console.log("Hello " + namesArray[i]);
    }
  }
}

// Call the greet function with the given names array
greet(names);
