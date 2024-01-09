// Given an integer, your task is to square every digit of it and concatenate them to produce a new integer.

const squareDigits = num => {
    const numbers=num
    .toString().split('').map(el=> el*el).join('')



    return numbers
  };
  
  console.log(squareDigits(2112)); // 4114
  console.log(squareDigits(3212)); // 9414
  console.log(squareDigits(9159)); // 8112581