// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


console.log("Hello World".includes("Hello"));
// The inclodes() method is called on the string "Hellow World"
// The method determins whether any part of the string contains "Hello" and outpus a boolian
// The return value is `true`  


console.log("Hello World".endsWith("Hello"));
// The endsWith() method is called on the string "Hellow World"
// The methout determins whether the end of the string contains "Hello" and outpus a boolian
// The return value is `false`  

console.log("Hello World".endsWith("rld"));
// The endsWith() method is called on the string "Hellow World"
// The methout determins whether the end of the string contains "rld" and outpus a boolian
// The return value is `true`  


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

var petName = "Laurence Rumpford Buckinghamsandwich"
console.log(petName.charAt(15))
// The charAt() method is called on the petName variable, which stored the string object "Laurence Rumpford Buckinghamsandwich" 
// The charAt() method returns ]the character in the string at the number provided within the parentheses
// In this example, the return value is "r" beause that character is at the 15th position within the string
// The console.log statement prints the return value of charAt() method (r) to the console.

var statement = "I'm having a great time!"
console.log(statement.toUpperCase())
// The toUpperCase() method is called on the statement variable, which stored the string object "I'm having a great time!".
// The toUpperCase() method converts all the characters in the string to uppercase.
// In this example, the string is transformed to "I'M HAVING A GREAT TIME!" by the toUpperCase() method.
// The console.log statement then prints the uppercase version of the string ("I'M HAVING A GREAT TIME!") to the console.


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var fruits = ["apple", "banana", "cranberry"]
console.log(fruits.slice(2))
// The slice() method is called on the fruits variable, which stored an array of string objects ["apple", "banana", "cranberry"].
// The slice() method returns a portion of the array. It selects the elements at the given number.
// In this example, fruits.slice(2) returns a new array containing the elements from the 2nd index.
// Since the 2nd index in the fruits array is "cranberry", the new array contains only this element.
// The console.log statement then prints the array returned by the slice() method (["cranberry"]) to the console.

var fruits = ["apple", "banana", "cranberry"]
console.log(fruits.reverse())
// The reverse() method is called on the fruits variable, which stored an array of string objects ["apple", "banana", "cranberry"].
// The reverse() method is used to reverse the order of the elements in an array.
// In this example, when fruits.reverse() is executed, the fruits array is modified so its elements are in the reverse order. 
// The console.log statement then prints the reversed array (["cranberry", "banana", "apple"]) to the console.