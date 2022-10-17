// const sum = (a, b) => a + b;
 
// console.log(sum(1,2))


// export default sum


// //Write Concise Object Literal Declarations Using Object Property Shorthand
// const createPerson = (name, age, gender) => {
//     return {
//       name,
//       age,
//       gender
//     };
//   };



// //Write Concise Declarative Functions with ES6
// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//       this.gear = newGear;
//     }
//   };
//   bicycle.setGear(3);
//   console.log(bicycle.gear);



// //Use class Syntax to Define a Constructor Function
// class Vegetable {
//     constructor(name, age, city){
//     this.name = name,
//     this.age = age,
//     this.city = city 
//     }
// }
// const carrot = new Vegetable('carrot', 28, 'Minsk');
// console.log(carrot);
// const user = new Vegetable('Vasia', 15, 'Bialastok');
// console.log(user);


// //Use getters and setters to Control Access to an Object
// class Thermostat {
//     constructor(fahrenheit) {
//       this.fahrenheit = fahrenheit;
//     }
//     get temperature() {
//       return (5 / 9) * (this.fahrenheit - 32);
//     }
    
//     set temperature(celsius) {
//       this.fahrenheit = (celsius * 9.0) / 5 + 32;
//     }
//   }


// //Create a Module Script
// <html>
//   <body>
// <script type="module" src="index.js"></script>

//   </body>
// </html>


// //Use export to Share a Code Block
// const uppercaseString = (string) => {
//     return string.toUpperCase();
//   }
  
//   const lowercaseString = (string) => {
//     return string.toLowerCase()
//   }
  
//   export {uppercaseString, lowercaseString}


// //Reuse JavaScript Code Using import
// import {uppercaseString, lowercaseString} from './string_functions.js';

// uppercaseString("hello");
// lowercaseString("WORLD!");


// //Use * to Import Everything from a File
// import * as stringFunctions from "./string_functions.js";

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");


// //Create an Export Fallback with export default
// export default function subtract(x, y) {
//     return x - y;
//   }


// //Import a Default Export
// import subtract from './math_functions.js'
// subtract(7,4);


// //Create a JavaScript Promise
// const makeServerRequest = new Promise((resolve, reject) =>{

// });


// //Complete a Promise with resolve and reject
// const makeServerRequest = new Promise((resolve, reject) => {
//     let responseFromServer;
      
//     if(responseFromServer) {
//       resolve('We got the data');
//     } else {  
//   reject('Data not received')  }
//   });


// //Handle a Fulfilled Promise with then
// const makeServerRequest = new Promise((resolve, reject) => {

//     let responseFromServer = true;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });

//   makeServerRequest.then(result => {
//     console.log(result)
//   });


// //Handle a Rejected Promise with catch
// const makeServerRequest = new Promise((resolve, reject) => {

//     let responseFromServer = false;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });
  
//   makeServerRequest.then(result => {
//     console.log(result);
//   });
  
//   makeServerRequest.catch(error =>{
//     console.log(error);
//   })