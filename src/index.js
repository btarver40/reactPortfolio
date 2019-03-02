import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));





// EXAMPLES OF CLASSES AND INHERITANCE

// class Animal{
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }


//   speak(){
//     console.log('I am', this.name, 'and I am', this.age, 'years old')
//   }

// }

// const animal = new Animal('Simba', 3)
// animal.speak();

// console.log(animal);

// class Lion extends Animal{
//   constructor(name, age, furColor, speed){
//     super(name, age);
//     this.furColor = furColor;
//     this.speed = speed;
//   }

//   roar(){
//     console.log(
//       'ROOAR! I HAVE', 
//       this.furColor, 
//       'fur and I run a', 
//       this.speed, 
//       'speed'
//     );
//   }
// }

// const lion1 = new Lion('Mufasa', 20, 'golden', 25);
// lion1.speak();
// lion1.roar();
// console.log(lion1);