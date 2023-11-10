// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?") 
}

askForName()

// I organized the code so that each opperation had its own line.

// EX 2:
function addThreeNums(num1, num2, num3) {
var sum = num1 + num2 + num3;
console.log(sum);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

// I changed the name of the variables so that their purpose is more clearly understood.
// I changed return to console.log so that the function would show an output.


// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

// Function was spelled wrong
// Adjusted the } so it would be on its own line

//  EX 4:
function average(num1, num2) {
var sum = num1 + num2;
    var avg = sum / 2;
console.log(avg)
  }

 average(7, 7)  
 average(9, 21)

// Adjusted { to be on the same line as "function"
// changed return to console.log to get an output
// removed spaces between var avg and console.log
// added imput to the finction
