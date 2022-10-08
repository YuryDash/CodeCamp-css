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