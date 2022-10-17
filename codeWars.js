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


//
function lovefunc(flower1, flower2){
    if(flower1 % 2 == 0 && flower2 % 2 == 1){
       return true;
   }
    if(flower1 % 2 == 1 && flower2 % 2 == 0){
      return true;
   }
   else{
       return false;
       }
   }

