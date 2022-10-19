// //==reverse words==

// function reverseWords(str) {
//     return str.split('').reverse().join('').split(' ').reverse().join(' ')
//     }
//     console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));


// //Jaden Casing Strings
// String.prototype.toJadenCase = function () { 
//     return this.split(" ").map(function(word){
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//   }


// //Convert a String to a Number!
// const stringToNumber = function(str){
//     let num = +str;
//       return num;
//     }


// //
// function lovefunc(flower1, flower2){
//     if(flower1 % 2 == 0 && flower2 % 2 == 1){
//        return true;
//    }
//     if(flower1 % 2 == 1 && flower2 % 2 == 0){
//       return true;
//    }
//    else{
//        return false;
//        }
//    }


// //Beginner Series #1 School Paperwork
// function paperwork(n, m) {
//     if (n < 0 || m < 0) {
//       return 0;
//     } else {
//     return n * m;
//       }
//     }


// // /How good are you really?
// betterThanAverage = (classPoints, yourPoints) => 
// classPoints.reduce((prev,curr) => prev + curr) / classPoints.length < yourPoints;

// //Find the next perfect square!
// function findNextSquare(sq) {
//     var root = Math.sqrt(sq);
//     if (Number.isInteger(root)) {
//       return Math.pow(root + 1, 2);
//     } else {
//       return -1;
//     }
//   }


// //Transportation on vacation
// function rentalCarCost(d) {
//     let s = 40;
//     let w = d * s;
//       if (d >= 3 && d < 7) return w - 20;
//       if (d >= 7) return w - 50;
//       if (d === 2) return w
//       if (d === 1) return w
//     }
//     console.log(rentalCarCost(8))


// //Calculate BMI
// function bmi(weight, height) {
//     let result = weight / (height * height)
//     if (result <= 18.5) return 'Underweigth'
//     if (result <= 25.0) return 'Normal'
//     if (result <= 30.0) return 'Overweight'
//     if (result > 30) return 'Obese'
//   }


// //You only need one - Beginner
// function check(a, x) {
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] == x) return true
//     }
//       return false
//     }


// //Total amount of points
// function points(games) {
//     let sum=0;
//     for (let i=0; i<games.length; ++i)
//     {
//       if (games[i][0]>games[i][2])
//         sum+=3;
//       if (games[i][0]==games[i][2])
//         sum+=1;
//     }
//     return sum;
//   }


// //Ones and Zeros

// const binary = (arr) => {
//     return parseInt(arr.join(""), 2);
// };

// console.log(binary([1,1,1,1]));


// //MakeUpperCase
// makeUpperCase = (str) => str.toUpperCase()


//Abbreviate a Two Word Name

// function abbrevName(name){
//     return name.split(" ").map(el => el[0].toUpperCase()).join(".")
//  }
// abbrevName('Yury Dash')
// console.log(abbrevName('Norb Yong Ops'))


// //Area or Perimeter

// const areaOrPerimeter = function(l , w) {
//     let p = 0;
//       if (l !== w) return p + (l*2 + w*2);
//     let a = 0;
//       if (l === w) return l * w;
//     };


// //Counting Duplicates
// function duplicateCount(text){
//     let result = 0,
//         soltingObject = {};
//     text.toLowerCase().split('').map(str => {
//         if (!soltingObject.hasOwnProperty(str)) {
//           soltingObject[str] = 0;
//         } else {
//           if (soltingObject[str] === 0) {
//             result += 1;
//           }
//           soltingObject[str] = soltingObject[str] + 1;
//         }
//     });
//     return result;
//   }


// //Find the odd int

// function findOdd(arr) {
//     for(let i = 0; i < arr.length; i++){
//       const count = arr.filter(value => value === arr[i]).length;
//       if(count % 2 == 1){
//         return arr[i];
//       }
//     }
//     return -1;
//   }