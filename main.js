// class Human {
//     constructor() {
//         this.gender = 'male';
//     }

//     printGender() {
//         console.log(this.gender);

//     }
// }

// class Person extends Human {
//     constructor() {
//         super();
//         this.name = 'Mukti';
//         this.gender = 'Female';

//     }

//     printMyName() {
//         console.log(this.name);

//     }
// }

// const person = new Person()
// person.printMyName();
// person.printGender();

//Class ES 7

// class Human {
//   gender = "male";

//   printGender = () => {
//     console.log(this.gender);
//   };
// }

// class Person extends Human {
//   name = "Mukti";
//   gender = "Female";

//   printMyName = () => {
//     console.log(this.name);
//   };
// }

// const person = new Person();
// person.printMyName();
// person.printGender();

// Rest && Spread

const array1 = [1,2,3,4]
const array2 = [...array1, 5,6]
console.log(array2);

const person = {
  name: 'Mukti'
}

const personAge = {
  ...person,
  age: 122
}

console.log(personAge);

const number = (...args) => {
  return args.filter(num => num === 2)
}
console.log(number(1,2,3))
