// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");

}

nameQuestion()

//EX 1: I added a semicolon after the print command. I moved the closed curly bracket up one line

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
console.log(`The sum of these three numbers is: ${sum}`);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
//EX 2: For this one I added a sentence into the log statment. This way you know what the funciton is doing in the statement.
// I also added a semicolon after the defined variable sum.

// EX 3:

function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();
// EX 3: First the word "function" was not fully spelled out. I also moved the closed curly bracket
// down a line to make the code block cleaner.

//  EX 4:
function average(num1, num2){
  var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`the average is: ${avg}.`)
  }
//EX 4: First I took the open curly bracket back up and placed it next so the function parameters.
// Also the period in the log statment was outside of the back quote
