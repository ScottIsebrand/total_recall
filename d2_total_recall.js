////////////////////////////////
//* Easy Going
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }
////////////////////////////////

////////////////////////////////
//* Get Even
// for (let i = 0; i <= 200; i++) {
//   if (i % 2 === 0) console.log(i);
// }
////////////////////////////////

////////////////////////////////
//* Fizz Buzz
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log('FizzBuzz');
//   }
//   if (i % 3 === 0) {
//     console.log('Fizz');
//   }
//   if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }
////////////////////////////////

////////////////////////////////
//* Wild Wild Life
// const wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory'];
// const sharky = ['Sharky', 'shark', 20, 'Left Coast'];
// const plantee = ['Plantee', 'plant', 5000, 'Mordor'];
// const porgee = ['Porgee', 'Porg', 186, 'Ahch-To'];
// const dart = ["D'Art", 'Demogorgan Dog', 2, 'Upside Down'];

// plantee[2] = 2001;
// wolfy[3] = 'Gotham City';
// dart.push('Hawkins');
// wolfy.splice(0, 1, 'Gameboy');

////////////////////////////////

////////////////////////////////
//* Yell at the Ninja Turtles
// const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// for (let ninjaTurtle of ninjaTurtles) {
//   console.log(ninjaTurtle);
// }

////////////////////////////////

////////////////////////////////
//* Methods, Revisited
const favMovies = [
  'Jaws',
  'The Fellowship of the Ring',
  "Howl's Moving Castle",
  'Django Unchained',
  'Cloud Atlas',
  'The Usual Suspects',
  'Toy Story',
  'Conan the Barbarian',
  'Titanic',
  'Harry Potter',
  'Fried Green Tomatoes',
  'Volver',
  'Oculus',
  'Seven',
  'Black Panther',
  'Harry Potter',
  'Imitation of Life',
  'Snatch',
  'Fast and Furious',
];
// console.log(favMovies.indexOf('Titanic'));

// favMovies.sort();
// favMovies.pop();
// favMovies.push('Guardians of the Galaxy');
// favMovies.reverse();
// favMovies.shift();
// favMovies.unshift('The Lion in Winter');
// favMovies.indexOf('Django Unchained');
// favMovies.splice(8, 1, 'Avatar');
// const lengthOfArray = favMovies.length;
// let lastHalfOfArray = favMovies.slice(lengthOfArray / 2);
// console.log(lastHalfOfArray);
// console.log(favMovies);
// console.log(favMovies.indexOf('Fast and Furious'));

////////////////////////////////

////////////////////////////////
//* Where is Waldo
const whereIsWaldo = [
  ['Timmy', 'Frank'],
  'Eggbert',
  ['Lucinda', 'Jacc', 'Neff', 'Snoop'],
  ['Petunia', ['Baked Goods', 'Waldo']],
];

console.log(whereIsWaldo);
console.log(whereIsWaldo.splice([1], 1));
whereIsWaldo[1][2] = 'No one';
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);

let whereIsWaldoSlice = whereIsWaldo.slice();
console.log(whereIsWaldo);

////////////////////////////////

////////////////////////////////
//*  Excited Kitten (using https://speaklolcat.com/)
// excitedKittenString = 'Love me, pet me! HSSSSSS!';
// for (i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     let kittyTalk = [
//       'HOOMAN, Y R U TAKIN PICTUREZ OV ME?',
//       'TEH KATNIP MADE ME DO IT',
//       'Y DOEZ TEH RED DOT ALWAYS GIT AWAY.',
//     ];
//     let randomNum = Math.floor(Math.random() * 3);
//     console.log(i, kittyTalk[randomNum]);
//   } else {
//     console.log(i, excitedKittenString);
//   }
// }

////////////////////////////////

////////////////////////////////
//*  Find the Median.... number in the following "nums" array, then console.log that number. hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into "Math.floor( // something )"
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];
nums.sort();
// console.log(nums);
let numsLength = nums.length;
let numsLengthDividedByTwo = numsLength / 2;
let numsMedianIndex = Math.floor(numsLengthDividedByTwo);
console.log(nums[numsMedianIndex]);

////////////////////////////////
