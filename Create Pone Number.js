// Write a function that accepts an array of 10 integers (between 0 and 9), and returns a string of those numbers in the form of a phone number

const createPhoneNumber = numbers => {
    //Using Suubstrings
 const str=numbers.join('');
 //return `(${str.substring(0,3)}) ${str.substring(3,6)}-${str.substring(6)}`;
return numbers.reduce((acc,curr) => acc.replace('x',curr),'(xxx) xxx-xxxx'); 
};
  
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
  console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // '(111) 111-1111'
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'