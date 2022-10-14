// function disemvowel(str) {
//     var newStr = "",
//         i;

//     for (i = 0; i < str.length; i++) {
//         if ("aeiou".includes(str[i].toLowerCase())) continue;
//         newStr += str[i];
//     }
//     return newStr;
// }


// let data = [];
// function filter_list(l) {

// for(let i = 0; i < l.length; i++ )
//     if(Number.isInteger(l[i])){
//         data.push(l[i]);
//     } else {
//         console.log('only Integer');
//     }
//     return console.log(data);
//   }
//   filter_list([1,3,4,'a','b', 'c'])

//   function filter_list(l) {return l.filter(Number.isInteger);}
//   console.log(filter_list([1,3,4,'a','b', 'c']))gbpltw




// function longest(s1, s2) {
//     return [...new Set((s1 + s2).split(''))].sort().join('');
// }



// function accum(s) {
//     const result = []
//     const lowerStr = s.toLowerCase()
  
//     for(let i = 0; i < lowerStr.length; i++) {
//       let str = lowerStr[i].toUpperCase()
//       for(let j = 0; j < i; j++) {
//         str += lowerStr[i]
//       }
//       result.push(str)
//     }
  
//     return result.join("-")
//   }



// //the feast of many Beats
// function feast(beast, dish) {
//   if (beast[0] == dish[0] && beast[beast.length -1] == dish[dish.length -1]){
//     return true;
//   } else {
//     return false;
//   }
// }


// sameCase = (a,b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1;

// function sameCase(a, b){
//     if(a.toLowerCase() === a.toUpperCase() || b.toUpperCase() === b.toLowerCase()){
//         return -1
//     } else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
//         return 1
//     } else {
//         return 0
//     }
// }


//Remove First and Last Character
// const removeChar = str => {
//     return str.slice(1, str.length - 1)
// }



// //Sum of positive
// function positiveSum(arr) {
//     let sumNum = 0;
//     for(let i = 0; i < arr.length; i++){
//       if (arr[i] > 0){
//       sumNum += arr[i];
//     //   console.log(sumNum);
//       } else (arr[i] <= 0)
//         continue;
//       }
//       return sumNum;
//     }
//   positiveSum([1,2,3])



// //Remove String Spaces
// function noSpace(x) {
//     let newStr = ''
//     for(let i = 0; i < x.length; i++) {
//         if(x[i] !== " "){
//             newStr += x[i]
//         }
//     }
//     return newStr
// }

// //Beginner lost whith out map
// function maps(x){
//     return x.map(n => n * 2);
//     }



// // Invert values

// function invert(array) {
//     let newAry = [];
//     for (let i = 0; i < array.length; i++) {
//       if ( array[i] === 0) {
//         newAry.push(array[i]);
//       } else {
//         newAry.push(array[i] * -1)
//       }
//     }
//     return newAry;
//   }

// //Square(n) Sum
// function squareSum(numbers){
//     var result = 0;
//     for (var i = 0; i < numbers.length; i++) {
//       result += (numbers[i] * numbers[i]);
//     }
//     return result;
//   }


// // You Can't Code Under Pressure #1

// function doubleInteger(i) {
//     let sum = i+i
//       return sum;
//     }


//Count By X
// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//       z.push(x * i);
//     }
//     return z;
//   }

//Convert a Boolean to a String
// function booleanToString(b){
//     let r = b.toString();
//     return r;
//   }



// Find the smallest integer in the array

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       const result = Math.min(...args);
//       return result
//     }
//   }


// //Rock Paper Scissors!
// const rps = (p1, p2) => {
//     if (p1 == p2) return 'Draw!';
    
//     if (p1 == 'scissors' && p2 == 'paper') return "Player 1 won!"
//     if (p1 == 'scissors' && p2 == 'rock') return "Player 2 won!"
    
//     if (p1 == 'rock' && p2 == 'paper') return "Player 2 won!"
//     if (p1 == 'rock' && p2 == 'scissors') return "Player 1 won!"
    
//     if (p1 == 'paper' && p2 == 'rock') return "Player 1 won!"
//     if (p1 == 'paper' && p2 == 'scissors') return "Player 2 won!"
//   };


//Fake Binary

// function fakeBin(x){
//     let  dmb ='';
//       for(let i = 0; i <x.length; i++){
//         if (x[i] < '5'){
//           dmb += '0';
//         } else dmb += 1;
//       }
//       return dmb
//     }



//Century From Year

// function century(year) {
//     let result = 0;
//     for (let i = 0; i < year; i++) {
//       if (i % 100 === 0) {
//         result++;
//       }
//     }
//     return result;
//   }




// function areYouPlayingBanjo(name) {
//     //   while()
//       if (name[0] === 'r' || name[0] === 'R') {
//         return name + " plays banjo";
//       } else return name + " does not play banjo"
//       return name;
//     }

//     console.log(areYouPlayingBanjo('Rino'));


// //Sum of odd numbers
// function rowSumOddNumbers(n) {
//     return n*n*n;
//     }

// //Use Arrow Functions to Write Concise Anonymous Functions
// const magic = () => new Date();

// // Write Arrow Functions with Parameters
// const myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1, 2], [3, 4, 5]));

// //Use the Rest Parameter with Function Parameters
// const sum = (...args) => args.reduce((a, b) => a + b, 0);

// //Use the Spread Operator to Evaluate Arrays In-Place
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1];  

// console.log(arr2);


//Use Destructuring Assignment to Extract Values from Objects

// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
//   const {today, tomorrow} = HIGH_TEMPERATURES


//Use Destructuring Assignment to Assign Variables from Objects
// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };  
//   const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

//Use Destructuring Assignment to Assign Variables from Nested Objects
// const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
//   };  
//   let {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
//   let {tomorrow:{low:lowTomorrow,high:highTomorrow}} = LOCAL_FORECAST;
  
// //Use Destructuring Assignment to Assign Variables from Arrays
// let a = 8, b = 6;
// [a, b] = [b, a];


// //Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
  
//   const [a, b, ...arr] = list;
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);


// Use Destructuring Assignment to Pass an Object as a Function's Parameters
// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };
  
//   const half = ({ max, min }) => (max + min) / 2.0;
  

//stachuk.com

// const a = 5;

// function myFn() {
//     function innerFn() {
//         console.log(a)
//     }
//     innerFn()
// }
// myFn

// let o = {}
// console.log(!!o); //true

// const button = {
//     width: 200,
//     text: "buy"
// }

// const redButton = {
//     ...button,
//     color: 'red',
// }
// console.log(redButton);

// const buttonInfo = {
//     text: 'buy'
// }
// const buttonStyle = {
//     color: 'yellow',
//     width: 200,
//     height: 50,
// }
// const button = {
//     ...buttonInfo,
//     ...buttonStyle,
// }
// console.table(button);


// //конкатенация строк
// const a = 'hello' + 'world';
// console.log(a);
// const b = 'hello ' + 'world';
// console.log(b);

// const c = 'hello';
// const d = 'world';
// const greeting = c + " " + d;
// console.log(greeting);
// //шаблонные строки
// const tsl = `${c} ${d}`;
// console.log(tsl);


//функциональные выражения (всегда анонимное)

// function(a,b) {
//         let c;
//     a = a + 1;
//     c = a + b;
//     return c
// }

// function myFn(a,b) {
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c
// }

// (a, b) => {
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c
// }

// setTimeout(() => {
//     console.log('отложенное сообщение')
// }, 2000);

//значение функции по умолчанию

// function multByFactor(value, multiplier = 1) {
//     return value * multiplier    
// }
// console.log(multByFactor(10, 2));//20
// multByFactor(5)//5

// const arrowFn = (value, multiplier =2) => {
//     return value * multiplier
// }
// console.log(arrowFn(5,10));
// console.log(arrowFn(5));

