// Return the number (count) of vowels (a, e, i, o, u) in the given string. 
// The input string will only consist of lower case letters and/or spaces.

const getCount = str => {
    
//     let vowelsCount=0;
//     for(let char of str){
//         if('aeiou'.includes(char)) vowelsCount++;
//     }
//     return vowelsCount;
//   };

  // An alternative solution could be to convert the string to an array (using the spread syntax)
// and filtering that array by vowels

const arr=[...str];
return arr.filter(ele =>['a','e','i','o','u'].includes(ele)).length;
};
  console.log(getCount('my pyx')); // 0
  console.log(getCount('pear tree')); // 4
  console.log(getCount('abracadabra')); // 5
  console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13