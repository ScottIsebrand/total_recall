// SECTION 1 Creating Classes & Factories
// Create a Hamster class
// class Hamster {
//   constructor(name) {
//     this.owner = '';
//     this.name = name;
//     this.price = 15;
//   }
//   wheelRun() {
//     console.log('squeak squeak');
//   }
//   eatFood() {
//     console.log('nibble nibble');
//   }
//   getPrice() {
//     return this.price;
//   }
// }
// // Create a Person class
// class Person {
//   constructor(name) {
//     this.name = name;
//     this.age = 0;
//     this.height = 0;
//     this.weight = 0;
//     this.mood = 0;
//     this.hamsters = [];
//     this.bankAccount = 0;
//   }
//   getName() {
//     return this.name;
//   }
//   getAge() {
//     return this.age;
//   }
//   getWeight() {
//     return this.weight;
//   }
//   greet() {
//     console.log(`I'm ${this.name}. Hi.`);
//   }
//   eat() {
//     this.weight++;
//     this.mood++;
//   }
//   exercise() {
//     this.weight--;
//   }
//   ageUp() {
//     this.age++;
//     this.height++;
//     this.weight++;
//     this.mood--;
//     this.bankAccount = this.bankAccount + 10;
//   }
//   buyHamster(hamster) {
//     this.hamsters.push(hamster);
//     this.mood = this.mood + 10;
//     this.bankAccount = this.bankAccount - hamster.getPrice();
//   }
// }
// // Create a Story with your Person class
// const timmy = new Person('Timmy');

// for (let i = 0; i < 5; i++) {
//   timmy.ageUp();
// }

// for (let i = 0; i < 5; i++) {
//   timmy.eat();
// }

// for (let i = 0; i < 5; i++) {
//   timmy.exercise();
// }

// for (let i = 0; i < 9; i++) {
//   timmy.ageUp();
// }

// const gus = new Hamster('Gus');

// gus.owner = 'Timmy';

// timmy.buyHamster(gus);

// for (let i = 0; i < 15; i++) {
//   timmy.ageUp();
// }

// timmy.eat();
// timmy.eat();

// timmy.exercise();
// timmy.exercise();

// CHEF MAKES DINNERS, SOLUTION FROM OFFICE HRS W/ COLTON
class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef {
  cooking(appetizer, entree, dessert) {
    return new Dinner(appetizer, entree, dessert);
  }
}

let chef1 = new Chef();
let firstDinner = chef1.cooking('cheese', 'steak', 'lollipops');
let secondDinner = chef1.cooking('Spam', 'Spam', 'Spam');
console.log(firstDinner);
console.log(secondDinner);

//
// // CHEF MAKES DINNERS, SOLUTION W/ BREAKOUT ROOM'S HELP
// class Dinner {
//   constructor(appetizer, entree, dessert) {
//     this.appetizer = appetizer;
//     this.entree = entree;
//     this.dessert = dessert;
//   }
// }

// class Chef {
//   getDinner(appetizer, entree, dessert) {
//     const dinner = new Dinner(appetizer, entree, dessert);
//     return dinner;
//   }
// }
//
// const chef1 = new Chef();

// const dinnersOfChef = [];
// const dinner1 = chef1.getDinner('Fried Calamari', 'Lasagna', 'cannoli');
// const dinner2 = chef1.getDinner('Spam', 'Spam', 'Spam');
// const dinner3 = chef1.getDinner('bread', 'steak', 'cake');
// dinnersOfChef.push(dinner1);
// dinnersOfChef.push(dinner2);
// dinnersOfChef.push(dinner3);
// console.log(dinnersOfChef);

// CAT COMBINATOR

// const cat1 = {
//   catName: 'Jenny',
//   breed: 'Mog',
//   age: 9,
// };

// console.log(cat1.age);
// console.log(cat1.breed);

// const cat2 = {
//   catName: 'Jam',
//   breed: 'Siamese',
//   age: 11,
// };

// function combineCats(mama, papa) {
//   const catCombinator = {
//     catName: mama.catName + papa.catName,
//     age: 1,
//     breed: mama.breed + '-' + papa.breed,
//   };
//   console.log(catCombinator);
//   return catCombinator;
// }

// combineCats(cat1, cat2);

// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

// console.log(
//   combineCats(
//     combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
//     combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
//   )
// );
