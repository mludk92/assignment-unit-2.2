// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*


let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we are declaring a varible called name and setting name to the string value of Dane 
// we are then console logging a if else statment if name is equal to Mary and if it is true
// if it is true then console.log Mary
// else console how do you do? 

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//  sets a undefined varible called secret , then sets a var named code = 123
// if code is = 123 meaning statment is true we then define var secret as string super 
// and multiple int value of code by 2 code will now = 123 * 2 = 246
// also if code is greater than 250 the  set var secret to string duper 
// we then console log secret. 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//  define isStudent as boolean value of true , define age as int = 34 and zip as int = 55407
// if two conditions are true those being isStuded = true and zip is > 80000 then we consoling youre a student on the west coast as string
// else consolog if isstudent is false or age < 30 what are you hobbies 
// else if isstudent is = true then log welcome to prime. we do not need to declare a and less then statment since > is handle above
// if none of the conditions are true then log how about the weather 
//we would for this for this statment log welcome to prime. 
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'blue'; // changed red to blue 
let colorTwo = 'red'; // changed blue to red
let mix = true; // this is correct 

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
} // added colorTwo var redefined for when mix is true 
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
let time = 4; // change from const to let -- i believe that a const is a never changing value 

if (temp > 39 && time >= 4) {      
  console.log('throw away the food!');
}
*/ // changed || or to && and 

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
let minAge = 21;  // const of minAge set to var let, 

if(minAge >= age) {    // changed < operater to > 
  console.log('no entry');
} else {
  console.log('enter');
}
*/  //the console.log if false might not need to be there based on the instructions but it also does not hurt to be there 

