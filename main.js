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

class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Mukti";
  gender = "Female";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();
