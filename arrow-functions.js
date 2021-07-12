/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b){
//     // Code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); //also valid
const addTwoNumbers2 = (a, b) => a + b; // the fat arrow implies the "return"
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns
const saySomthing = message => console.log(message); //function parentheses not required with single parementer
saySomthing("Hello there!!");

const sayHello = () => console.log("hello"); //If no params, parentheses is needed.
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
) //When it returns multiple lines, it must be wrapped in parentheses.

console.log(returnMultipleLines());