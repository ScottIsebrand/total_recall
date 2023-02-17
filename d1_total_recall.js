// Example of What your JS File in VS Code should look like

/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/

// I. Variables & Data Types
// A. Q + A
// 1. We assign a value to a variable with an assignment operator
// 2. We reassign it with an assignment operator
// 3.
// 4. Writing a description of how you want a segment of code to work

// B. Strings
// let firstVariable = 'Hello World';
// firstVariable = 4;
// let secondVariable = firstVariable;
// secondVariable = 'some string';
// const yourName = 'Scott';
// console.log('Hello, my name is ' + yourName);

// C. Booleans (make all print all false)
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';
// console.log(a === b);
// console.log(c === d);
// console.log('Name' !== 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true && false);
// console.log(false && false && false && false && false && true);
// console.log(false !== false);
// console.log(e !== 'Kevin');
// console.log((a === b) === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log((a === a) === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 === '48');

// D. The Farm
// let animal = 'cow';
// if (animal === 'cow') {
//   console.log('mooooo');
// } else if (animal !== 'cow') {
//   console.log("Hey! You're not a cow.");
// }

// E. Driver's Ed
// let personAge = 16;
// if (personAge >= 16) {
//   console.log('Here are the keys!');
// } else {
//   console.log("Sorry, you're too young.");
// }

//_____________________________________________________________

// II. Loops
// A. The Basics
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i <= 400; i++) {
//   console.log(i);
// }

// for (let i = 12; i <= 4000; i += 3) {
//   console.log(i);
// }

// B. Get even
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} <-- is an even number`);
//   } else {
//     console.log(i);
//   }
// }

// C. Give me Five
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(`I found a ${i}. High five!| I found a ${i}. Three is a crowd`);
//   } else if (i % 5 === 0) {
//     console.log(`I found a ${i}. High five!`);
//   } else if (i % 3 === 0) {
//     console.log(`I found a ${i}. Three is a crowd.`);
//   }
// }

// D. Savings account
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = i + sum;
//   console.log(sum);
// }

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = i + sum;
//   console.log(sum * 2);
// }

//_____________________________________________________________

// III. Arrays & Control Flow
// A. Talk about it: 1. Arrays are made of elements. Yes and no. An array will guarantee that elements are in the order of their indexed positions. But which element is in which indexed position is something that can be changed (even if the array is declared with a const variable.) 3. Example array use: names of students in a class.
//
// B. Easy Does It
// let quotes = [
//   'Go for it!',
//   "It's later than you think.",
//   'Let us go forward together.',
// ];

// C. Accessing elements
// const randomThings = [1, 10, 'Hello', true];
// randomThings[0];
// randomThings[2] = 'World';
// console.log(randomThings);

// D. Change values
// const ourClass = ['Salty', 'Zoom', 'Sardine', 'Slack', 'GitHub'];
// ourClass[2];
// ourClass[4] = 'Octocat';
// console.log(ourClass);

// E. Mix It Up
// const myArray = [5, 10, 500, 20];
// myArray.push('Aegon', 'Orys');
// myArray.shift();
// myArray.unshift('Bob Marley');
// myArray.pop();
// myArray.reverse();

// F. Biggie Smalls
// let biggieNum = 100;
// if (biggieNum < 100) {
//   console.log('little number');
// } else {
//   console.log('big number');
// }

// G. Monkey in the Middle
// let monkeyNum = 7;
// if (monkeyNum < 5) {
//   console.log('little number');
// } else if (monkeyNum > 10) {
//   console.log('big number');
// } else {
//   console.log('monkey');
// }

// H. What's in Your Closet?
const kristynsCloset = [
  'left shoe',
  'cowboy boots',
  'right sock',
  'Per Scholas hoodie',
  'green pants',
  'yellow knit hat',
  'marshmallow peeps',
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    'grey button-up',
    'dark grey button-up',
    'light blue button-up',
    'blue button-up',
  ],
  [
    // These are Thom's pants
    'grey jeans',
    'jeans',
    'PJs',
  ],
  [
    // Thom's accessories
    'wool mittens',
    'wool scarf',
    'raybans',
  ],
];

// console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');
// kristynsCloset.splice(6, 0, 'raybans');
// kristynsCloset[5] = 'stained knit hat';
// thomsCloset[0][0];
// thomsCloset[1][0];
// console.log(
//   `Tom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}`
// );

//_____________________________________________________________

// IV. Functions
// A.
// function printGreeting(name) {
//   console.log(`Hello there, ${name}!`);
// }
// printGreeting('Slimer');

// B.
// function printCool(name) {
//   return `${name} is cool`;
// }
// console.log(printCool('Captain Reynolds'));

// printCool('Major Lynn');

// C.
// function calculateCube(sideNum) {
//   return sideNum * sideNum * sideNum;
// }

// console.log(calculateCube(5));

// D.

// function isVowel(char) {
//   let lowerCaseLetter = char.toLowerCase();
//   if (
//     lowerCaseLetter === 'a' ||
//     lowerCaseLetter === 'e' ||
//     lowerCaseLetter === 'i' ||
//     lowerCaseLetter === 'o' ||
//     lowerCaseLetter === 'u'
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isVowel('o'));

// E.
// function getTwoLengths(string1, string2) {
//   return [string1.length, string2.length];
// }
// console.log(getTwoLengths('I', 'Robot'));

// F.

// write a function(getMultipleLengths)

// function getMultipleLengths(arrayOfStrings) {
//   const arrayOfNumbers = [];
//   for (let i = 0; i < arrayOfStrings.length; i++) {
//     const currentString = arrayOfStrings[i];
//     const lengthOfCurrentString = currentString.length;
//     arrayOfNumbers.push(lengthOfCurrentString);
//   }
//   console.log(arrayOfNumbers);
//   return arrayOfNumbers;
// }
// getMultipleLengths(['hello', 'what', 'was', 'up', 'dude']);

// G.
// function maxOfThree(num1, num2, num3) {
//   let maxNum = num1;
//   if (maxNum < num2) {
//     maxNum = num2;
//   }
//   if (maxNum < num3) {
//     maxNum = num3;
//   }
//   console.log(maxNum);
//   return maxNum;
// }
// maxOfThree(15, 77, 99);

// H. Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// function printLongestWord(arrayOfStrings) {
//   let longestWordInArray = '';
//   for (let i = 0; i < arrayOfStrings.length; i++)
//     if (longestWordInArray.length < arrayOfStrings[i].length) {
//       longestWordInArray = arrayOfStrings[i];
//     }
//   console.log(longestWordInArray);
//   return longestWordInArray;
// }

// printLongestWord(['Jack', 'do', 'Diane', 'a', 'Max', 'Peanut', 'big']);

// H. ALTERNATIVE SOLUTION FROM OFFICE HOURS
// function printLongestWord(arrayOfWords) {
//   let longestWord = arrayOfWords[0]
//   let longestWordLength = arrayOfWords[0].length
//   console.log(longestWord);
//   arrayOfWords.forEach(currentWord => {
//     previousLength = longestWordLength
//     console.log(previousLength);
//     console.log(longestWord);
//     longestWordLength = Math.max(longestWord.length, currentWord.length)
//     if (previousLength !== longestWordLength) {
//         longestWord = currentWord
//     }
//   });
//   return longestWord
// }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//_____________________________________________________________

// V. Objects
// A.
const user = {
  name: 'John',
  email: 'johnjsmith123@gmail.com',
  age: 33,
  purchased: [],
};

// B.
user.email = 'johnjaysmith123@gmail.com';
user.age++;

// C.
user.location = 'Boise';

// D
user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino jodhpurs');

// console.log(user.purchased[2]);

// E.
user.friend = {
  name: 'Grace Hopper',
  age: 85,
  location: 'New York City',
  purchased: [],
};
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A latte');
console.log(user);

// F.
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}

for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}

// G.
function updateUser() {
  user.age++;
  user.name = user.name.toUpperCase();
}
updateUser();
console.log(user);

function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toUpperCase();
}

oldAndLoud(user);
console.log(user);

//_____________________________________________________________

// Extra
