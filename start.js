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